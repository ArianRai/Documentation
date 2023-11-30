# Terraform modules

## Index

-   [File Structure](#file-structure)
-   [Main file](#blocks)

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

variable "subnets" {
  type = map(object({
    name             = string
    address_prefixes = list(string)
  }))
}
```
