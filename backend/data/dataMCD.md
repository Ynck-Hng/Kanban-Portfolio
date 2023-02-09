# MCD de la base de donnée
---

![image](https://user-images.githubusercontent.com/115977341/217832465-f0dcf922-cc9d-4189-9238-d8f009d1c033.png)

# Code Mocodo
---

```
List: code_list (INT), name (VARCHAR), position (INT), created_at (DATE), updated_at (DATE)
contain, 1N Card, 01 List
Card: code_card (INT), name (VARCHAR), color(VARCHAR), position (INT), code_list(INT), created_at (DATE), updated_at (DATE)
:

::
associated, 0N Card, 01 Tag: code_card, code_tag
Tag: code_tag (INT), name (VARCHAR), color (VARCHAR), created_at (DATE), updated_at (DATE)
```
