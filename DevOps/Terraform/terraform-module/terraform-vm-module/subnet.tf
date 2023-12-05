resource "azurerm_subnet" "subnet1" {
  name                 = each.key
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.virtual-network.name
  address_prefixes     = each.value.address_prefixes

  for_each = var.subnets
}
