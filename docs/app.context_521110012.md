
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
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : app.context&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Praneeth Kumar Reddy B</span>, last modified on Jan 31, 2020
                        </div>
                    <div id="main-content" class="wiki-content group">
                    app.context contains entire data about the current journey<div class="toc-macro rbtoc1600762812664">

- [Arrays](#app.context-Arrays)
        
    - [dataHistory](#app.context-dataHistory)
            
        - [example](#app.context-example)
        
        
    - [history](#app.context-history)
            
        - [example](#app.context-example.1)
        
        
    

- [Objects](#app.context-Objects)
        
    - [steps](#app.context-steps)
            
        - [example](#app.context-example.2)
        
        
    - [journeyDetails](#app.context-journeyDetails)
            
        - [example](#app.context-example.3)
        
        
    

- [Properties](#app.context-Properties)
        
    - [intent | string](#app.context-intent|string)
            
        - [example](#app.context-example.4)
        
        
    - [journeyName | string](#app.context-journeyName|string)
            
        - [example](#app.context-example.5)
        
        
    - [journeyId | string](#app.context-journeyId|string)
            
        - [example](#app.context-example.6)
        
        
    - [complete | boolean](#app.context-complete|boolean)
            
        - [example](#app.context-example.7)
        
        
    - [invalidCount | int](#app.context-invalidCount|int)
            
        - [example](#app.context-example.8)
        
        
    


</div>- - -<div id="expander-446509276" class="expand-container"><div id="expander-control-446509276" class="expand-control"><span class="expand-control-icon">![](images/icons/grey_arrow_down.png)</span><span class="expand-control-text">Expand to view</span></div><div id="expander-content-446509276" class="expand-content"><div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">{
    "dataHistory": [
        {
            "data": {
                "message": "login"
            },
            "intent": "login",
            "confidence": 0.908
        },
        {
            "data": {
                "message": "login"
            },
            "intent": "login",
            "confidence": 0.908
        },
        {
            "data": {
                "message": "9876543210"
            },
            "intent": "trains-search",
            "confidence": 0.23
        },
        {
            "data": {
                "message": "9222"
            },
            "intent": "trains-search",
            "confidence": 0.23
        }
    ],
    "history": [
        {
            "intent": "login",
            "complete": true,
            "steps": {
                "mobilenumber": "9603490616",
                "verifyotp": "9222"
            }
        }
    ],
    "intent": "login",
    "journeyName": "Login",
    "journeyId": "5e0daa1fe0f5fc001181f77a",
    "steps": {
        "mobilenumber": "9876543210",
        "verifyotp": "9222"
    },
    "complete": true,
    "journeyDetails": {
        "steps": [
            {
                "id": "5e0daaabe0f5fc001181f77b",
                "slug": "mobilenumber"
            },
            {
                "id": "5e0dbf256debc20010b7f80b",
                "slug": "verifyotp"
            }
        ],
        "_id": "5e0daa1fe0f5fc001181f77a",
        "createdDate": "2020-01-02T08:30:23.460Z",
        "updatedDate": "2020-01-04T10:26:13.053Z",
        "deleted": false,
        "defaultJourney": false,
        "actions": [
            {
                "type": "func",
                "id": 0,
                "func": "loginAction"
            }
        ],
        "stepConditions": [],
        "name": "Login",
        "description": "Login journey",
        "botId": "x1577939877999",
        "categoryType": "Default Category",
        "survey": false,
        "slug": "login",
        "__v": 83,
        "initFunction": "loginInit"
    },
    "invalidCount": 0
}</pre>
</div></div></div></div>## Arrays### dataHistory`dataHistory`&nbsp;contains an array of most recent incoming messages, intent, and their confidences.&nbsp;#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"dataHistory": [
        {
            "data": {
                "message": "login"
            },
            "intent": "login",
            "confidence": 0.908
        },
        .
        .
        .
        {
            "data": {
                "message": "9876543210"
            },
            "intent": "trains-search",
            "confidence": 0.23
        },
        {
            "data": {
                "message": "9222"
            },
            "intent": "trains-search",
            "confidence": 0.23
        }
    ]</pre>
</div></div>- - -### historyThis `history` is an array which contains data about previous intents like intent name, complete status, step values#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"history": [
        {
            "intent": "login",
            "complete": true,
            "steps": {
                "mobilenumber": "9876543210",
                "verifyotp": "9222"
            }
        }
    ]</pre>
</div></div>- - -## Objects### steps- `app.context.steps`&nbsp;is an object which contains&nbsp;key-value pairs&nbsp;of steps and the step values (user inputs) in the format&nbsp;step_name: step_value- A new step is added into&nbsp;`app.context.steps`&nbsp;only after the validation of that step.- When it hits an intent, this steps object is initially empty#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"steps": {
        "mobilenumber": "9876543210",
        "verifyotp": "9222"
    },</pre>
</div></div>- - -### journeyDetails`journeyDetails `is an object which contains all details about the current journey i.e. all the steps it has, actions,  stepConditions, name, description, slug, intiFunction and etc..#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"journeyDetails": {
        "steps": [
            {
                "id": "5e0daaabe0f5fc001181f77b",
                "slug": "mobilenumber"
            },
            {
                "id": "5e0dbf256debc20010b7f80b",
                "slug": "verifyotp"
            }
        ],
        "_id": "5e0daa1fe0f5fc001181f77a",
        "createdDate": "2020-01-02T08:30:23.460Z",
        "updatedDate": "2020-01-04T10:26:13.053Z",
        "deleted": false,
        "defaultJourney": false,
        "actions": [
            {
                "type": "func",
                "id": 0,
                "func": "loginAction"
            }
        ],
        "stepConditions": [],
        "name": "Login",
        "description": "Login journey",
        "botId": "x1577939877999",
        "categoryType": "Default Category",
        "survey": false,
        "slug": "login",
        "__v": 83,
        "initFunction": "loginInit"
    }</pre>
</div></div>- - -## Properties### intent | `string`Has the value of journey slug#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"intent": "login"</pre>
</div></div>- - -### journeyName | `string`Has the value of journey name#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"journeyName": "Login"</pre>
</div></div>- - -### journeyId | `string`Has the value of journey id#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"journeyId": "5e0daa1fe0f5fc001181f77a"</pre>
</div></div>- - -### complete | `boolean`States whether the journey is complete or not#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"complete": true</pre>
</div></div>- - -### invalidCount | `int`Has the value of invalid count i.e. how many times user data validation fails#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"invalidCount": 0</pre>
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

