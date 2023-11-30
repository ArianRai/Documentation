resource "azurerm_subnet_network_security_group_association" "sub1" {
  subnet_id                 = azurerm_subnet.subnet1["public_subnet"].id
  network_security_group_id = azurerm_network_security_group.nsg-arian.id
}
