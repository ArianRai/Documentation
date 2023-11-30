# Terraform modules

## Index

-   [File Structure](#file-structure)
-   [Main file](#the-maintf-file)
-   [Instancing the resources](#instancing-the-resources)

---

For working with modules you should have all the resources and step within a directory and reference the source directory on the `main.tf` file.

## File Structure

    .
    ├── ./ main-directory
    	└── main.tf
    ├── ./ vm-module
    	├── resource-group.tf
    	├── virtual-network.tf
    	├── network-interface.tf
    	├── virtual-machine.tf
    	└── variables.tf

## The `main.tf` file

In this file you have to initialize the variables according to their type

```javascript
module "module_vm1" {

  source = "../terraform-vm-module"

  location            = "eastus"
  resource_group_name = "rg-arian"

// We will create multiple subnets
  subnets = {
    private_subnet = {
      name             = "private_subnet"
      address_prefixes = ["10.0.1.0/24"]
    }
    public_subnet = {
      name             = "private_subnet"
      address_prefixes = ["10.0.2.0/24"]
    }
  }

}
```

## Variables

```javascript

variable "resource_group_name" {
  description = "value"
  type        = string
}

variable "location" {
  description = "value"
  type        = string
}

// We need to store all the data for the resources in a Map or Set
variable "subnets" {
  type = map(object({
    name             = string
    address_prefixes = list(string)
  }))
}
```

## Instancing the resources

When you are creating the resources you need to indicate where to get the info from

```javascript
resource "azurerm_subnet" "subnet1" {

  // To create multiple resources at once, you need to loop over the values defined for the variables
  for_each = var.subnets

  name                 = each.key
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.virtual-network.name
  address_prefixes     = each.value.address_prefixes
}
```

### Referencing one of the instances

We have created multiple resources of the same type using data in a Map (key-value pair). To reference one of the instances we have to access the object using the name in bracket notation `element.["key"]`

```javascript
resource "azurerm_subnet_network_security_group_association" "sub1" {
  subnet_id                 = azurerm_subnet.subnet1["public_subnet"].id
  network_security_group_id = azurerm_network_security_group.nsg-arian.id
}
```
