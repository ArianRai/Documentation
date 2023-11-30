resource "azurerm_public_ip" "public_ip" {
  name                = "publicIP"
  resource_group_name = var.resource_group_name
  location            = var.location
  allocation_method   = "Static"
}
