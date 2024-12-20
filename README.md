# Computers Game

Это игра, в которой два компьютера (Jarvis и Friday) по очереди пытаются угадать числа друг друга. Один компьютер генерирует случайное число, а другой пытается угадать его, используя различные стратегии (например, последовательное увеличение или бинарный поиск).

## Описание

- **Jarvis** использует стратегию угадывания, основанную на последовательности чисел Фибоначчи, начиная с 1 и 2, и затем добавляя два предыдущих числа для каждой новой догадки.
- **Friday** использует стратегию бинарного поиска для угадывания числа.

## Структура проекта

- `game.js`: Главный файл с логикой игры, где два компьютера по очереди пытаются угадать числа друг друга.
- `README.md`: Описание проекта и инструкции.

## Установка и запуск

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/Ваше_Имя/computers-game.git
    ```

2. Перейдите в директорию проекта:

    ```bash
    cd computers-game
    ```

3. Убедитесь, что у вас установлен Node.js. Для этого выполните команду:

    ```bash
    node -v
    ```

4. Запустите игру:

    ```bash
    node game.js
    ```

## Логика игры

1. **Jarvis** и **Friday** по очереди пытаются угадать число другого компьютера.
2. **Jarvis** использует последовательности чисел Фибоначчи
3. **Friday** использует бинарный поиск для угадывания числа.
4. Игра заканчивается, когда один из компьютеров угадывает число другого.
