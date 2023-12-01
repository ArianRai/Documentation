# Terraform

For terraform files -> [Terraform files](https://github.com/ArianRai/Documentation/tree/main/terraform-module)  
For terraform modules -> [Terraform modules](https://github.com/ArianRai/Documentation/blob/main/Terraform%20modules.md)

## Index

-   [Commands](#commands)
-   [Blocks](#blocks)
    -   [Providers](#providers)
    -   [Variables](#Variables)
    -   [Resource Group](#resource-group)
    -   [Virtual Network](#virtual-network)
    -   [Subnet](#subnet)
    -   [Network Security Group](#network-security-group)
    -   [Associating the NSG to the Subnet](#associating-the-nsg-to-the-subnet)
    -   [Public IP](#public-ip)
    -   [Network Interface](#network-interface)
    -   [Virtual Machine](#virtual-machine)
-   [Loops](#loops)

---

## Commands

Initialize a working directory containing Terraform configuration files.

-   `$ terraform init`

Validate the configuration files for errors

-   `$ terraform validate`

Show what actions will Terraform take to apply the current configuration

-   `$ terraform plan`

Creates or updates infrastructure according to Terraform configuration files

-   `$ terraform apply`
-   `$ terraform apply --auto-approve`

Destroys Terraform-managed infrastructure

-   `$ terraform destroy`
-   `$ terraform apply -destroy`

Working with the terraform.state file

-   `$ terraform state list // List resources in the state.`
-   `$ terraform state show <resource_name> // Show a resource of the state`

Display all the outputs or the outputs of the specified resource

-   `$ terraform output`
-   `$ terraform output <resource_name>`

Working with Workspaces

-   `$ terraform workspace list` // List of every workspace
-   `$ terraform workspace show` // Show current workspace
-   `$ terraform workspace new | select | delete <workspace_name>`

### Graph

Produces a representation of the dependency graph between different objects in the current configuration and state. Utilised typically with GraphViz

-   `$ terraform graph`
-   `$ terraform graph | dot -Tsvg > graph.svg`

## Blocks

#### Providers

```javascript
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }
  }
  // A backend defines where Terraform stores its state data files.

  backend "azurerm" {
    resource_group_name  = "rg-stg-acc"
    storage_account_name = "stgaccarian34265428"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }
}

provider "azurerm" {
  features {}
}
```

#### Variables

You can create variables to store values. You can define a default value. Then you can reference them using `var.variable_name`

```javascript
variable "resource_group_name" {
  description = "The name of the resource group"
  type        = list(string)
  default     = "rg-aiuda"
}

variable "location" {
  description = "The location"
  type        = string
}
```

If you don't specify a default value, you can define them in a `terraform.tfvars` file, or in the `plan` step using the `-var "name=value"` flag

```javascript
location = 'eastus'
resource_group_name = 'rg-arian'
```

#### Resource Group

```javascript
resource "azurerm_resource_group" "rg" {
  name     = "resource-group1"
  location = "eastus"
  tags     = {}
}
```

#### Virtual Network

```javascript
resource "azurerm_virtual_network" "virtual-network" {
  name                = "example-network"
  address_space       = ["10.0.0.0/16"]
  location            = var.location
  resource_group_name = var.resource_group_name
}
```

#### Subnet

```javascript
resource "azurerm_subnet" "subnet1" {
  name                 = "subnet1"
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.virtual-network.name # Append to a VN
  address_prefixes     = ["10.0.2.0/24"]
}
```

#### Network Security Group

```javascript
resource "azurerm_network_security_group" "nsg-arian" {
  name                = "arian-security-group"
  location            = var.location
  resource_group_name = var.resource_group_name

// Security Rules

  security_rule {
    name                       = "test123"
    priority                   = 100
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "22"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }
}
```

#### Associating the NSG to the Subnet

```javascript
resource "azurerm_subnet_network_security_group_association" "sub1" {
  subnet_id                 = azurerm_subnet.subnet1.id
  network_security_group_id = azurerm_network_security_group.nsg-arian.id
}
```

#### Public IP

```javascript
resource "azurerm_public_ip" "public_ip" {
  name                = "publicIP"
  resource_group_name = var.resource_group_name
  location            = var.location
  allocation_method   = "Static"
}
```

#### Network Interface

```javascript
resource "azurerm_network_interface" "example" {
  name                = "example-nic"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

// Appendig the public ip to the NIC

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.subnet1.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.public_ip.id
  }
}
```

#### Virtual Machine

```javascript
resource "azurerm_linux_virtual_machine" "vm" {
  resource_group_name             = azurerm_resource_group.rg.name
  name                            = "arian-vm"
  location                        = azurerm_resource_group.rg.location
  size                            = "Standard_F2"
  admin_username                  = "azureuser"
  admin_password                  = "azureuser123!"
  disable_password_authentication = false
  network_interface_ids = [
    azurerm_network_interface.example.id,
  ]

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts"
    version   = "latest"
  }
}
```

## Loops

-   for_each | count | for
