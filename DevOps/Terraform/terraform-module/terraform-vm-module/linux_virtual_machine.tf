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
