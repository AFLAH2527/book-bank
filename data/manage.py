import json
from typing import List


def load_data() -> List:
    with open('books.json', 'r') as input_file:
        return json.load(input_file)['data']


def save_data(data):
    with open('books.json', 'w') as output_file:
        json.dump({'data': data}, output_file)


def help():
    print('''
    Available Commands:
        add    - Add a new book
        delete - Delete a book
        edit   - Edit an existing book
        exit   - Exit the CLI
        help   - Show the help menu
        save   - Save the changes to the file 
        show   - Show available books
    ''')


def block(n): return f'{n}' if (n / 10) >= 1 else f'0{n}'


def add_book(books: List):
    id = len(books) + 1
    course_code = input('Book course code: ')
    title = input('Book title: ')
    img = input('Book image file name: ')
    count = int(input('Book count: '))
    books.append({
        'id': id,
        'img': img,
        'course_code': course_code,
        'title': title,
        'count': count
    })
    print('-> Book added')


def edit_book(books: List):
    for i, book in enumerate(books):
        print(f"{block(i+1)}.{book['title']}[{book['course_code']}]")
    book_id = int(input('Select Book: ')) - 1
    current_book = books[book_id]
    for key, value in current_book.items():
        print(f'Current book {key} : {value}')
        value = input('Enter new value(or just enter to skip): ')
        if value != '':
            current_book[key] = value
    books[book_id] = current_book
    print('-> Book edited')


def delete_book(books: List):
    for i, book in enumerate(books):
        print(f"{block(i+1)}.{book['title']}[{book['course_code']}]")
    book_id = int(input('Select Book: ')) - 1
    current_book = books[book_id]
    print(f'''
        ----------------------------------------------------
        ID          : {current_book['id']}
        Title       : {current_book['title']}
        Course Code : {current_book['course_code']}
        Image File  : {current_book['img']}
        Count       : {current_book['count']}
        ____________________________________________________
        ''')
    confirm = input('Delete the book(y/n)?: ')
    if confirm == 'y':
        books.pop(book_id)
        print('-> Book removed')


def show_books(books: List):
    print('Available Books Are:')
    for book in books:
        print(f'''
        ----------------------------------------------------
        ID          : {book['id']}
        Title       : {book['title']}
        Course Code : {book['course_code']}
        Image File  : {book['img']}
        Count       : {book['count']}
        ____________________________________________________
        ''')


def main():
    command = None
    books = load_data()
    try:
        while True:
            command = input('[BookBankMan]> ')
            if command == 'help':
                help()
            elif command == 'add':
                add_book(books)
            elif command == 'save':
                save_data(books)
            elif command == 'show':
                show_books(books)
            elif command == 'edit':
                edit_book(books)
            elif command == 'delete':
                delete_book(books)
            elif command == 'exit':
                confirm = input('Save changes(y/n)?: ')
                if confirm == 'y':
                    save_data(books)
                break
            else:
                print(f'Unknown command: {command}')
                help()

    except KeyboardInterrupt:
        confirm = input('\nSave changes(y/n)?: ')
        if confirm == 'y':
            save_data(books)


if __name__ == '__main__':
    main()
