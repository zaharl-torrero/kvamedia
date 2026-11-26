# Кирилл Штапаков — лендинг

Лендинг агентства на основе https://vk.ru/kvamedia_prod. Vite, HTML/CSS/JS, локальные шрифты и материалы группы.

Запуск: `npm ci`, `npm run dev`. Сборка: `npm run build`. Публикация через GitHub Actions в Pages при push в main.

Форма проверяет данные и готовит письмо на kvamedia63@gmail.com либо текст для самостоятельной отправки в VK. Серверной отправки и хранения данных нет. Посетитель явно выбирает канал и отправляет сообщение. Цена PREMIUM взята из закреплённого предложения; на сайте есть уточнение актуальности условий. Кейс ссылается на оригинальную публикацию. Кадры открывают реальные клипы.

## Публикация

Официальный сайт: https://shtapakov.ru (домен куплен для Кирилла, A-записи → 88.210.53.199, сервер VDSina). nginx `/etc/nginx/sites-available/shtapakov.ru`, корень `/var/www/shtapakov/current` → `releases/<коммит>`; прошлые релизы остаются для отката. HTTPS — Let's Encrypt, продлевается сам.

Выкладка: `npm run build`, архив `dist/` в новый `releases/<коммит>`, затем переключить ссылку `current` (хелпер `30-products/5-konsultantimpuls/site/ssh_run.py`). Копия на GitHub Pages остаётся, canonical указывает на shtapakov.ru.
