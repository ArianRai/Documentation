# Linux Commands Cheat Sheet

## Basic Commands

### File and Directory Management

-   `pwd` – Print the current working directory.
-   `ls` – List directory contents.
    -   `ls -l` – Detailed listing with permissions, ownership, and timestamps.
    -   `ls -a` – List all files, including hidden files.
-   `cd` – Change directory.
    -   `cd ~` – Go to the home directory.
    -   `cd ..` – Go to the parent directory.
    -   `cd /path/to/directory` – Go to a specific directory.
-   `mkdir` – Create a new directory.
    -   `mkdir new_folder` – Create a new folder called `new_folder`.
-   `rmdir` – Remove an empty directory.
-   `rm` – Remove files or directories.
    -   `rm file.txt` – Delete a file.
    -   `rm -r folder/` – Recursively delete a directory and its contents.
    -   `rm -f file.txt` – Forcefully delete a file (without prompt).
-   `touch` – Create an empty file or update the timestamp of an existing file.
    -   `touch newfile.txt`

### File Viewing and Editing

-   `cat` – Concatenate and display the content of files.
    -   `cat file.txt` – Display the content of `file.txt`.
-   `less` – View file contents one page at a time.
    -   `less file.txt` – Open `file.txt` for paging through the content.
-   `head` – Display the first few lines of a file.
    -   `head -n 10 file.txt` – Show the first 10 lines.
-   `tail` – Display the last few lines of a file.
    -   `tail -n 10 file.txt` – Show the last 10 lines.
-   `nano` / `vim` – Text editors.
    -   `nano file.txt` – Open `file.txt` in the `nano` editor.
    -   `vim file.txt` – Open `file.txt` in the `vim` editor.

### File Permissions

-   `chmod` – Change file permissions.
    -   `chmod 755 file.txt` – Set read, write, and execute for the owner, and read/execute for others.
-   `chown` – Change file ownership.
    -   `chown user:group file.txt` – Change ownership of `file.txt` to user and group.
-   `chgrp` – Change group ownership of a file.
    -   `chgrp group file.txt` – Change the group ownership of `file.txt` to `group`.

### File Searching

-   `find` – Search for files in a directory hierarchy.
    -   `find /path/to/dir -name "filename"` – Find a file by name.
    -   `find /path/to/dir -type f -name "*.txt"` – Find all `.txt` files.
-   `grep` – Search for a pattern in a file.
    -   `grep "pattern" file.txt` – Search for `pattern` in `file.txt`.
    -   `grep -r "pattern" /path/to/dir/` – Search recursively in a directory.
-   `locate` – Find a file by name (uses a pre-built index).
    -   `locate file.txt`

## Intermediate Commands

### Process Management

-   `ps` – Display current running processes.
    -   `ps aux` – Show detailed information about all running processes.
-   `top` – Display real-time system processes.
-   `kill` – Terminate a process.
    -   `kill PID` – Kill the process with the given PID.
    -   `kill -9 PID` – Forcefully kill the process.
-   `htop` – Interactive process viewer (requires installation).
-   `bg` – Resume a stopped job in the background.
-   `fg` – Bring a background job to the foreground.

### Network Management

-   `ping` – Test network connectivity.
    -   `ping google.com` – Ping Google.
-   `ifconfig` – Display network interfaces (deprecated in favor of `ip`).
    -   `ifconfig eth0` – Show details for the `eth0` interface.
-   `ip` – Show/manipulate routing, devices, and tunnels.
    -   `ip addr show` – Show network interfaces.
-   `netstat` – Network statistics.
    -   `netstat -tuln` – Show listening ports and active connections.
-   `wget` – Download files from the web.
    -   `wget https://example.com/file` – Download a file from the URL.
-   `curl` – Transfer data with URLs.
    -   `curl -O https://example.com/file` – Download a file using `curl`.

### Disk Usage

-   `df` – Display disk space usage.
    -   `df -h` – Human-readable format.
-   `du` – Estimate file space usage.
    -   `du -sh folder/` – Show the total size of a directory.
-   `mount` – Mount a filesystem.
    -   `mount /dev/sda1 /mnt/` – Mount the `/dev/sda1` partition to `/mnt/`.
-   `umount` – Unmount a filesystem.
    -   `umount /mnt/` – Unmount the directory `/mnt/`.

## Advanced Commands

### System Information

-   `uname` – Display system information.
    -   `uname -a` – Show all system information.
-   `uptime` – Show how long the system has been running.
-   `dmesg` – Print kernel messages.
-   `lscpu` – Display CPU architecture information.
-   `lsblk` – List information about block devices.

### User Management

-   `useradd` – Add a new user.
    -   `useradd username` – Create a new user with the username `username`.
-   `usermod` – Modify a user.
    -   `usermod -aG groupname username` – Add a user to a group.
-   `passwd` – Change user password.
    -   `passwd username` – Change the password for `username`.
-   `groupadd` – Add a new group.
-   `groupdel` – Delete a group.

### Archiving and Compression

-   `tar` – Archive files.
    -   `tar -cvf archive.tar directory/` – Create an archive.
    -   `tar -xvf archive.tar` – Extract an archive.
-   `gzip` – Compress files.
    -   `gzip file.txt` – Compress `file.txt`.
    -   `gunzip file.txt.gz` – Decompress a `.gz` file.
-   `zip` / `unzip` – Create and extract zip files.
    -   `zip archive.zip file.txt` – Create a zip file.
    -   `unzip archive.zip` – Extract a zip file.

### Scripting and Automation

-   `cron` – Schedule tasks.
    -   `crontab -e` – Edit the cron jobs.
-   `echo` – Print text to the terminal.
    -   `echo "Hello, world!"` – Output text.
-   `chmod +x` – Make a script executable.
    -   `chmod +x script.sh` – Make `script.sh` executable.
-   `./` – Execute a script.
    -   `./script.sh` – Run `script.sh` if it has executable permissions.

### Advanced Package Management (for Debian-based systems)

-   `apt` – Package manager for Debian-based systems.
    -   `apt update` – Update package lists.
    -   `apt upgrade` – Upgrade installed packages.
    -   `apt install package_name` – Install a package.
    -   `apt remove package_name` – Remove a package.
