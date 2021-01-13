server {
  server_name www.mybrokensite.com;

  location / {
    root /var/www/www.mybrokensite.com/;
    index index.html;
    try_files $uri $uri/ /index.html;
  }
}
