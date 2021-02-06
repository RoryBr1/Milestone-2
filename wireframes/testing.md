# Testing

<hr>

## W3C Validation 
### HTML
*index.html* and *plan-a-visit.html* were both put through the [W3C HTML Validator](https://validator.w3.org/)
* #### Index.html
    The following errors were found and corrected

1.    >Error: Bad value 120px for attribute height on element img: Expected a digit but saw p instead.
        >From line 31, column 13; to line 31, column 131
     >< img src="assets/images/hooker.png" alt="Galway Hooker, type of fishing boat home to Galway." id="hooker" height=120px >↩     
    "height=120px" corrected to "height=120".
2. > Error: Element a not allowed as child of element ul in this context. (Suppressing further errors from this subtree.)
    > From line 49, column 13; to line 49, column 50
    > < a href="index.html" class="nav-link" >↩     
    This same error was found for the "Plan A Visit" and "Contact" links in #mobile-nav. The "Ul" element was changed to a "nav" element.
3. > Error: Bad value for attribute action on element form: Must be non-empty.
    > From line 68, column 10; to line 68, column 43
    > ↩         < form id="contact-form" action="" >↩     
    action="" was removed.
4. > Error: Stray end tag i.
    > From line 73, column 98; to line 73, column 101
    > lane">< /i >< /i >< /butt
    The stray < /i > tag was removed.
5. > Error: A slash was not immediately followed by >.
    > At line 153, column 17
           > < br/  >↩        
    Several < br/ > tags written incorrectly written with a space before the closing bracket. The spaces were removed.
6. > Error: Stray start tag script.
    > From line 159, column 73; to line 159, column 106
    > ton): --> <script src="assets/js/toggle.js"></scri
    Script tag was outside of < body >. All script tags were moved to within < body >.
