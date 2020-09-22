
        <div id="page">
            <div id="main" class="aui-page-panel">
                <div id="main-header">
                    <div id="breadcrumb-section">
                        
                            1. 
                                    <span>[Documentation](index.html)</span>
                                
                                                    1. 
                                    <span>[API Reference](API-Reference_503021723.html)</span>
                                
                                                    1. 
                                    <span>[Objects](Objects_530219016.html)</span>
                                
                                                
                    </div>
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : app.utilFunctions&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Praneeth Kumar Reddy B</span>, last modified on Feb 08, 2020
                        </div>
                    <div id="main-content" class="wiki-content group">
                    This object contains utility functions to speed up the development process like `emailValidator`, `pinCodeValidator`, and `mobileNumValidator` <div class="toc-macro rbtoc1600762813078">

- [Methods](#app.utilFunctions-Methods)
- [emailValidator](#app.utilFunctions-emailValidator)
        
    - [Syntax](#app.utilFunctions-Syntax)
    - [Parameters](#app.utilFunctions-Parameters)
            
        - [emailString | string](#app.utilFunctions-emailString|string)
        - [example](#app.utilFunctions-example)
        
        
    - [Return Value | array](#app.utilFunctions-ReturnValue|array)
            
        - [example](#app.utilFunctions-example.1)
        
        
    - [Example](#app.utilFunctions-Example)
    

- [mobileNumValidator](#app.utilFunctions-mobileNumValidator)
        
    - [Syntax](#app.utilFunctions-Syntax.1)
    - [Parameters](#app.utilFunctions-Parameters.1)
            
        - [mobile| string](#app.utilFunctions-mobile|string)
        - [example](#app.utilFunctions-example.2)
        
        
    - [Return Value | array](#app.utilFunctions-ReturnValue|array.1)
            
        - [example](#app.utilFunctions-example.3)
        
        
    - [Example](#app.utilFunctions-Example.1)
    

- [pinCodeValidator](#app.utilFunctions-pinCodeValidator)
        
    - [Syntax](#app.utilFunctions-Syntax.2)
    - [Parameters](#app.utilFunctions-Parameters.2)
            
        - [pincode | string](#app.utilFunctions-pincode|string)
        - [example](#app.utilFunctions-example.4)
        
        
    - [Return Value | array](#app.utilFunctions-ReturnValue|array.2)
            
        - [example](#app.utilFunctions-example.5)
        
        
    - [Example](#app.utilFunctions-Example.2)
    


</div>- - -## Methods## emailValidatorThis method validates the given string for any valid emails are present or not. If valid emails are present it returns the matched emails array otherwise it returns an empty array.### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.utilFunctions.emailValidator(emailString)</pre>
</div></div>### Parameters#### emailString | `string`A string to test it contains any valid emails#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: text; gutter: false; theme: Confluence" data-theme="Confluence">example@example.com</pre>
</div></div>### Return Value | `array`If valid emails are present it returns the matched emails array otherwise it returns an empty array.#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: text; gutter: false; theme: Confluence" data-theme="Confluence">[
  "example@example.com"
]
or
[] //if emails not matched</pre>
</div></div>### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">let email = `example@example.com`;
let matches = app.utilFunctions.emailValidator(email)</pre>
</div></div>- - -## mobileNumValidatorThis method validates the given string is a valid mobile number or not. Then it returns the matched mobile number as an array otherwise it returns an empty array.### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.utilFunctions.mobileNumValidator(mobile)</pre>
</div></div>### Parameters#### mobile| `string`A string to test it contains any valid mobile numbers#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: text; gutter: false; theme: Confluence" data-theme="Confluence">9876543210</pre>
</div></div>### Return Value | `array`If a valid mobile number is present it returns the matched number as an array otherwise it returns an empty array.#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: text; gutter: false; theme: Confluence" data-theme="Confluence">[
  "9876543210"
]
or
[] //if mobile number is not matched</pre>
</div></div>### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">let mobile = '9839874325'; //[6-9]XXXXXXXXX, 091[6-9]XXXXXXXXX, 091-[6-9]XXXXXXXXX
let matches = app.utilFunctions.mobileNumValidator(mobile);</pre>
</div></div>- - -## pinCodeValidatorThis method validates the given string is a valid mobile number or not. Then it returns the matched mobile number as an array otherwise it returns an empty array.### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.utilFunctions.pinCodeValidator(pincode)</pre>
</div></div>### Parameters#### pincode | `string`A string to test whether it is valid Pincode or not#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: text; gutter: false; theme: Confluence" data-theme="Confluence">516390</pre>
</div></div>### Return Value | `array`If a valid Pincode is present it returns the matched Pincode as an array otherwise it returns an empty array.#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: text; gutter: false; theme: Confluence" data-theme="Confluence">[
  "516390"
]
or
[] //if pincode number is not matched</pre>
</div></div>### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">let pincode = '516390';
let matches = app.utilFunctions.pinCodeValidator(pincode);</pre>
</div></div>- - -
                    </div>

                    
                                                      
                </div>             </div> 
            <div id="footer" role="contentinfo">
                <section class="footer-body">
                    Document generated by Confluence on Sep 22, 2020 13:50
                    <div id="footer-logo">[Atlassian](http://www.atlassian.com/)</div>
                </section>
            </div>
        </div>     

