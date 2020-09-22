
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
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : app.translate&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Praneeth Kumar Reddy B</span>, last modified on Jan 29, 2020
                        </div>
                    <div id="main-content" class="wiki-content group">
                    This object contains methods for translating a message to the target language, the methods are `detectLanguageAndTranslate` and `translate`<div class="toc-macro rbtoc1600762813024">

- [Methods](#app.translate-Methods)
- [detectLanguageAndTranslate](#app.translate-detectLanguageAndTranslate)
        
    - [Syntax](#app.translate-Syntax)
    - [Parameters](#app.translate-Parameters)
            
        - [message | string](#app.translate-message|string)
        - [example](#app.translate-example)
        - [targetLanguage | optional](#app.translate-targetLanguage|optional)
        
        
    - [Return Value](#app.translate-ReturnValue)
    - [Example](#app.translate-Example)
    

- [translate](#app.translate-translate)
        
    - [Syntax](#app.translate-Syntax.1)
    - [Parameters](#app.translate-Parameters.1)
            
        - [message | string](#app.translate-message|string.1)
        - [example](#app.translate-example.1)
        - [language | object or string](#app.translate-language|objectorstring)
        - [example](#app.translate-example.2)
        
        
    - [Return Value](#app.translate-ReturnValue.1)
    - [Example](#app.translate-Example.1)
    


</div>- - -## Methods## detectLanguageAndTranslateThis method is used to translate the given message to the target language specified. It uses google translate API### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.translate.detectLanguageAndTranslate(message, targetLanguage = 'en')</pre>
</div></div>### Parameters#### message | `string`The message to translate into the target language#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">Hi! How are you?</pre>
</div></div>#### targetLanguage | `optional`This is the target language code in which language the message need to be translated. This is optional. The default value is `en`### Return Value### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">example code</pre>
</div></div>- - -## translateThis method also used to translate the given message to the target language specified. It uses google translate API### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.translate.translate(message, language, callback)</pre>
</div></div>### Parameters#### message | `string`The message to translate into the target language#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">Hi! How are you?</pre>
</div></div>#### language | `object` or `string`If `language` is a string, then it takes the source language as `en`, and targetLanguage as `language` passed to the method.If `language` is an object, then it takes the `from` as a source language and `to` as a target language.#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">{
    "from" : "en",
    "to" : "hi"     //hindi code
}
or
"hi" //then default source language is 'en'</pre>
</div></div>### Return ValueIt returns `error` and `translatedText` via callback passed to the method### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">let message = `Hi! How are you?`;
// let language= 'hi'; 
let language = {
    "from": "en",
    "to": "hi"
};
app.translate.translate(message, language, function (error, translatedText) {
    if(error){
      //deal with error
    }
    app.log(translatedText, 'Translated Text');
});</pre>
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

