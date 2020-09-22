
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
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : app.options&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Praneeth Kumar Reddy B</span>, last modified on Jan 31, 2020
                        </div>
                    <div id="main-content" class="wiki-content group">
                    This object contains all the data about minConfidence, targetLanguage, etc. The object passed in `app.start` method is stored as `app.options` object, if any values not passed in the object then the default value is taken.<div class="toc-macro rbtoc1600762813244">

- [Objects](#app.options-Objects)
        
    - [authOptions](#app.options-authOptions)
            
        - [example](#app.options-example)
        
        
    - [excludeKeywordsForPrediction](#app.options-excludeKeywordsForPrediction)
            
        - [example](#app.options-example.1)
        
        
    - [excludeParamsForSwitching](#app.options-excludeParamsForSwitching)
            
        - [example](#app.options-example.2)
        
        
    - [intentSwitchExclusions](#app.options-intentSwitchExclusions)
            
        - [example](#app.options-example.3)
        
        
    

- [Methods](#app.options-Methods)
- [onInvalidCountExceeded](#app.options-onInvalidCountExceeded)
        
    - [Syntax](#app.options-Syntax)
    - [Example](#app.options-Example)
    


</div>- - -<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">{
  "minConfidence": 0.8,
  "contextConfidence": 0.9,
  "entityThreshold": 0.96,
  "suggestionConfidence": 0.65,
  "suggestionQuestion": "Did you mean ?",
  "enableSuggestion": false,
  "unknownMessage": "I think you are looking for something I cannot help you with.",
  "transferToAgent": false,
  "transferToAgentMessage": "I am unable to help you with your query at the moment but I can transfer our conversation to my human friend who can help you out.",
  "targetLanguage": "en",
  "listenLanguage": "en",
  "autoResponse": true,
  "spellCorrection": true,
  "intentSwitchExclusions": [],
  "secondaryModelConfidence": 0.84,
  "FAQQuery": "",
  "i18n": false,
  "authOptions": {
      "type": "custom",
      "intents": [],
      "faq": true
  },
  "shouldFAQSessionEnd": true,
  "enableContextForPrediction": false,
  "excludeKeywordsForPrediction": [],
  "excludeParamsForSwitching": [],
  "translateInputMessages": true,
  "saveSuggestions": false
}</pre>
</div></div>## Objects### authOptionsThis object contains the type and intents#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"authOptions": {
      "type": "custom",
      "intents": [],
      "faq": true
  }</pre>
</div></div>- - -### excludeKeywordsForPredictionThis is an array containing values for excluding in prediction#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"excludeKeywordsForPrediction": [
  "car",
  "account"
]</pre>
</div></div>- - -### excludeParamsForSwitchingThis is an array containing values for excluding in context (intent) switching#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"excludeParamsForSwitching" : [
  'final-check', 
  'marital-status', 
  'loan-type', 
  'company-name'
]</pre>
</div></div>- - -### intentSwitchExclusionsThis is also an array containing values for excluding in switching intents#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"intentSwitchExclusions" : [
    'refund-issues',
    'login-issues',
    'get-all-data'
]</pre>
</div></div>- - -## Methods## onInvalidCountExceededThis method is executed whenever `invalidCount` reached. invalidCount contains a max number of validations failed (number of times user entered wrong data) in a step to trigger this method. This needs to be set in `app.start` options object.### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">onInvalidCountExceeded: () =&gt; {
    //your code
}</pre>
</div></div>### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">onInvalidCountExceeded: (context) =&gt; {
    return new Promise(resolve =&gt; {
        app.sendTextMessage(`Seems like you're stuck, so I am going to take you to main menu.`).then(() =&gt; {
            app.triggerIntent('default')
            app.start();
            return;
        })
    })
}</pre>
</div></div>
                    
</div>

                    
                                                      
                </div>             </div> 
            <div id="footer" role="contentinfo">
                <section class="footer-body">
                    Document generated by Confluence on Sep 22, 2020 13:50
                    <div id="footer-logo">[Atlassian](http://www.atlassian.com/)</div>
                </section>
            </div>
        </div>     

