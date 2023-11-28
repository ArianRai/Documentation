# Terraform

## Index

-   [Commands](#commands)
-   [Blocks](#blocks)

---

## Comands

### Init

Initializes a working directory containing Terraform configuration files.

-   `$ terraform init`

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
