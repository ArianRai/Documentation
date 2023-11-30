# Terraform modules

## Creating the module

For working with modules you should have all the resources and step within a directory andreference the source directory on the `main.tf` file and initialize the variables according to their type

```javascript
module "module_vm1" {

  source = "../terraform-vm-module"

  location            = "eastus"
  resource_group_name = "rg-arian2"

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

  traffic_rule = [{
    name                       = "SSH"
    priority                   = 100
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "22"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
    },
    {
      name                       = "HTTP"
      priority                   = 101
      direction                  = "Inbound"
      access                     = "Allow"
      protocol                   = "Tcp"
      source_port_range          = "*"
      destination_port_range     = "80"
      source_address_prefix      = "*"
      destination_address_prefix = "*"
    }
  ]
}
```
