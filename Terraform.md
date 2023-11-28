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
