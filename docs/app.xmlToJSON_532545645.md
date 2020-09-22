
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
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : app.xmlToJSON&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Praneeth Kumar Reddy B</span>, last modified on Jan 29, 2020
                        </div>
                    <div id="main-content" class="wiki-content group">
                    This object contains two methods `toJson` and `toXml`. These methods are used to convert XML to JSON and vice versa.<div class="toc-macro rbtoc1600762813109">

- [Methods](#app.xmlToJSON-Methods)
- [toJson](#app.xmlToJSON-toJson)
        
    - [Syntax](#app.xmlToJSON-Syntax)
    - [Parameters](#app.xmlToJSON-Parameters)
            
        - [xml | string](#app.xmlToJSON-xml|string)
        - [example](#app.xmlToJSON-example)
        
        
    - [Return Value](#app.xmlToJSON-ReturnValue)
            
        - [example](#app.xmlToJSON-example.1)
        
        
    - [Example](#app.xmlToJSON-Example)
    

- [toXml](#app.xmlToJSON-toXml)
        
    - [Syntax](#app.xmlToJSON-Syntax.1)
    - [Parameters](#app.xmlToJSON-Parameters.1)
            
        - [json | string](#app.xmlToJSON-json|string)
        - [example](#app.xmlToJSON-example.2)
        
        
    - [Return Value](#app.xmlToJSON-ReturnValue.1)
            
        - [example](#app.xmlToJSON-example.3)
        
        
    - [Example](#app.xmlToJSON-Example.1)
    


</div>- - -## Methods## toJsonThis is used to convert XML to JSON### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.xmlToJSON.toJson(xml)</pre>
</div></div>### Parameters#### xml | `string`An XML string to convert it into JSON#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: xml; gutter: false; theme: Confluence" data-theme="Confluence">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;note&gt;
  &lt;to&gt;Tove&lt;/to&gt;
  &lt;from&gt;Jani&lt;/from&gt;
  &lt;heading&gt;Reminder&lt;/heading&gt;
  &lt;body&gt;Don't forget me this weekend!&lt;/body&gt;
&lt;/note&gt;</pre>
</div></div>### Return ValueIt returns a JSON string (use `JSON.parse` to convert it into JSON object)#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">{"note":{"to":"Tove","from":"Jani","heading":"Reminder","body":"Don't forget me this weekend!"}}</pre>
</div></div>### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">let xml = `&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;note&gt;
  &lt;to&gt;Tove&lt;/to&gt;
  &lt;from&gt;Jani&lt;/from&gt;
  &lt;heading&gt;Reminder&lt;/heading&gt;
  &lt;body&gt;Don't forget me this weekend!&lt;/body&gt;
&lt;/note&gt;`;

let json = app.xmlToJSON.toJson(xml);</pre>
</div></div>- - -## toXmlThis is opposite to `toJson` method because it converts JSON to XML### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.xmlToJSON.toXml(json)</pre>
</div></div>### Parameters#### json | `string`A JSON string to convert it into XML#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">{"note":{"to":"Tove","from":"Jani","heading":"Reminder","body":"Don't forget me this weekend!"}}</pre>
</div></div>### Return ValueIt returns an XML string#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: xml; gutter: false; theme: Confluence" data-theme="Confluence">&lt;note to="Tove" from="Jani" heading="Reminder" body="Don't forget me this weekend!"&gt;&lt;/note&gt;</pre>
</div></div>### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">let json = `{"note":{"to":"Tove","from":"Jani","heading":"Reminder","body":"Don't forget me this weekend!"}}`;
let xml = app.xmlToJSON.toXml(json);</pre>
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

