# Brendwall Техническое задание

##  Требования

- **Python** (>= 3.11)  
- **Node.js** (>= 16.x) и **npm** или **yarn**  
- **pip** и **virtualenv** (для управления зависимостями Python)  

---

## 1. Настройка бэкенда (Django)

### Шаг 1: Клонирование репозитория
```bash
git clone https://github.com/victor-ajayi/brendwall-task
cd brendwall-task/backend
```

### Шаг 2: Создание и активация виртуального окружения
```bash
python3 -m venv venv
source venv/bin/activate  # В Windows: venv\Scripts\activate
```

### Шаг 3: Установка зависимостей
```bash
pip install -r requirements.txt
```

Запустите миграции:
   ```bash
   python manage.py migrate
   ```

### Шаг 6: Запуск Django-сервера
```bash
python manage.py runserver
```

Бэкенд будет доступен по адресу: **`http://127.0.0.1:8000`**

---

## 2. Настройка фронтенда
Необходимо установить зависимости используя **npm**:
```bash
npm install
```

### Шаг 4: Запуск сервера
1. Запустите **Django сервер**:
   ```bash
   cd api
   python manage.py runserver
   ```

2. В новом терминале запустите **фронтенд**:
   ```bash
   cd frontend
   npm run dev
   ```

---

Приложение готово к запуску!