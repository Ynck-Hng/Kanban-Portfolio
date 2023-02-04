(image here)

Code Mocodo

```
List: code_list (INT), name (VARCHAR)
contain, 1N Card, 11 List
Card: code_card (INT), name (VARCHAR), color(VARCHAR), code_tag(INT)
:

::
associated, 1N Card, 11 Tag
Tag: code_tag (INT), name (VARCHAR), color (VARCHAR)
```