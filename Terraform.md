# Terraform

## Index

-   [Commands](#commands)
-   [Blocks](#blocks)

---

## Comands

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
  type        = string
  default     = "rg-aiuda"
}

variable "location" {
  description = "The location"
  type        = string
}
```

If you don't specify a default value, you can define them in a `terraform.tfvars` file, or in the `plan` step using the `-var` flag

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
