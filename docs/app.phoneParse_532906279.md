
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
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : app.phoneParse&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Praneeth Kumar Reddy B</span>, last modified on Jan 30, 2020
                        </div>
                    <div id="main-content" class="wiki-content group">
                    This object contains methods for parsing phone number i.e. `getPhone` and `isPhone`. These methods are mostly used in IVR bots for parsing phone numbers.<div class="toc-macro rbtoc1600762813191">

- [Methods](#app.phoneParse-Methods)
- [getPhone](#app.phoneParse-getPhone)
        
    - [Syntax](#app.phoneParse-Syntax)
    - [Parameters](#app.phoneParse-Parameters)
    - [message | string](#app.phoneParse-message|string)
            
        - [example](#app.phoneParse-example)
        
        
    - [Return Value | string](#app.phoneParse-ReturnValue|string)
            
        - [example](#app.phoneParse-example.1)
        
        
    - [Example](#app.phoneParse-Example)
    

- [isPhone](#app.phoneParse-isPhone)
        
    - [Syntax](#app.phoneParse-Syntax.1)
    - [Parameters](#app.phoneParse-Parameters.1)
    - [phone| string](#app.phoneParse-phone|string)
            
        - [example](#app.phoneParse-example.2)
        
        
    - [Return Value | boolean](#app.phoneParse-ReturnValue|boolean)
            
        - [example](#app.phoneParse-example.3)
        
        
    - [Example](#app.phoneParse-Example.1)
    


</div>- - -## Methods## getPhoneThis method used for getting phone numbers from voice response.### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.phoneParse.getPhone(message)</pre>
</div></div>### Parameters### message | `string`A string containing phone number text#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"double 9 double 4 triple 8 triple 6"</pre>
</div></div>### Return Value | `string`It returns the parsed mobile number#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"9944888666"</pre>
</div></div>### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">let message = 'double 9 double 4 triple 8 triple 6';
let mobile = app.phoneParse.getPhone(message);
app.log(mobile,"Parsed mobile");
//the log will be
"9944888666"</pre>
</div></div>- - -## isPhoneThis method used for testing a string is a valid phone number or not### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.phoneParse.isPhone(phone)</pre>
</div></div>### Parameters### phone| `string`A string containing phone number text#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"9876543210"</pre>
</div></div>### Return Value | `boolean`It returns the boolean value. If it is valid number returns `true` otherwise `false`.#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">true</pre>
</div></div>### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">let phone = '9876543210';
let isPhone = app.phoneParse.isPhone(phone);
app.log(isPhone, "is mobile?");
//the log will be
true</pre>
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

