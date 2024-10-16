# Brendwall техническое задание

##  Требования

- **Python** (>= 3.11)  
- **Node.js** (>= 16.x) и **npm** или **yarn**  
- **pip** и **virtualenv** (для управления зависимостями Python)  

---

## 1. Настройка бэкенда (Django)

### Клонирование репозитория
```bash
git clone https://github.com/victor-ajayi/brendwall-task
cd brendwall-task/backend
```

### Создание и активация виртуального окружения
```bash
python3 -m venv venv
source venv/bin/activate  # В Windows: venv\Scripts\activate
```

### Установка зависимостей
```bash
pip install -r requirements.txt
```

Запустите миграции:
   ```bash
   python manage.py migrate
   ```

### Запуск Django-сервера
```bash
python manage.py runserver
```

---

## 2. Запуск приложения
Необходимо сначала установить зависимости используя **npm**:
```bash
npm install
```

Затем запустить **Django сервер**:
   ```bash
   cd api
   python manage.py runserver
   ```

В новом терминале запустите **фронтенд**:
   ```bash
   cd frontend
   npm run dev
   ```

---

Приложение готово! Оно будет доступно по URL: **`http://127.0.0.1:3000`**