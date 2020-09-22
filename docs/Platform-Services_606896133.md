
        <div id="page">
            <div id="main" class="aui-page-panel">
                <div id="main-header">
                    <div id="breadcrumb-section">
                        
                            1. 
                                    <span>[Documentation](index.html)</span>
                                
                                                    1. 
                                    <span>[API Reference](API-Reference_503021723.html)</span>
                                
                                                
                    </div>
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : Platform Services&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Shubhi Saxena</span>, last modified on Apr 26, 2020
                        </div>
                    <div id="main-content" class="wiki-content group">
                    In case integration with a different widget is needed, Yellow Messenger’s services can be accessed using APIs. There are two most important APIs needed to achieve this.## Message API**Request**This API takes in user’s query as input and returns the bot’s response as an output. Once you have created a journey in the bot, you can call it like this -<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">https://app.yellowmessenger.com/integrations/yellowmessenger/message</pre>
</div></div>In order to test it, please import the following cURL request into Postman/terminal and update the bot ID with the ID of the bot that you are looking to test -<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">curl --location --request POST 'https://app.yellowmessenger.com/integrations/yellowmessenger/message' \
--header 'Content-Type: application/json' \
--data-raw '{
    "sender": "319334277206543397813972131",
    "botId": "x1560161983543",
    "data": "{\"message\":\"raise issues\"}",
    "source": "syncApi"
}'</pre>
</div></div>The bot ID can be found in the bot URL, e.g. in the following image, the bot ID is **x1582189898556.**<span class="confluence-embedded-file-wrapper image-center-wrapper">![](attachments/606896133/607027201.png)</span>The sender is a unique identity used to identify each user in this bot. It can be random string, email, phone, etc.**Response**The API returns a JSON as a response with sender ID and message. message contains the response of the chatbot to the user’s query after performing all specified actions.Note, session management happens automatically through this API. If the time difference between two consecutive messages from the same user is more than 30 mins, automatically a new session is started. If it's less, the message automatically gets added to the same session.## Prediction API**Request**Prediction API is used to trigger the NLP service and get intents and entities detected by the bot. Below is a sample request -<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">https://app.yellowmessenger.com/api/ml/prediction?bot=x1557296852218&amp;text=asd&amp;language=en</pre>
</div></div>In order to test it, please import the following cURL request into Postman/terminal and update the bot ID with the ID of the bot that you are looking to test -<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">curl --location --request GET 'https://app.yellowmessenger.com/api/ml/prediction?bot=x1557296852218&amp;text=asd&amp;language=en' \
--header 'x-auth-token: 37e735d870e917cf8497616e7bf0b9a71cd5fcd3370ba96aa8e9d4b34f2b78e2'</pre>
</div></div>Here, x-auth-token is the unique token of each user to identify permissions for this user on the platform. You can access your auth token by going to Home → Account Settings → Access Keys<span class="confluence-embedded-file-wrapper image-center-wrapper">![](attachments/606896133/607027214.png)</span>**Response**Here is a sample response from the API<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">{
    "core": false,
    "intents": {
        "viti": 0.306,
        "wow_there": 0.699
    },
    "language_detected": "en",
    "sentiment": "neutral",
    "small_talk_model": {},
    "text": "asd",
    "parser": {
        "noun_chunks": [],
        "lemmas": [
            "asd"
        ],
        "sentences": [
            "asd"
        ],
        "tokens": [
            {
                "text": "asd",
                "pos": "X",
                "lemma": "asd"
            }
        ],
        "entities": [],
        "other_keywords": [
            {
                "text": "asd",
                "pos": "X",
                "lemma": "asd"
            }
        ],
        "parsed_tree": [
            {
                "head_pos": 101,
                "dep": "ROOT",
                "text": "asd",
                "pos": "X",
                "head_text": "asd",
                "children": []
            }
        ],
        "lemma_list": [
            {
                "lemma": "asd",
                "pos": "X",
                "text": "asd"
            }
        ]
    },
    "confidence": 0.699,
    "global_entities": [],
    "entities": {},
    "synonym_detected": false,
    "intent": "wow_there",
    "global_model": {},
    "response": {}
}</pre>
</div></div>
                    
</div>

                                        <div class="pageSection group">
                        <div class="pageSectionHeader">
                            ## Attachments:
                        </div>

                        <div class="greybox" align="left">
                                                            ![](images/icons/bullet_blue.gif)
                                [image-20200227-072028.png](attachments/606896133/607027201.png) (image/png)
                                  

                                                            ![](images/icons/bullet_blue.gif)
                                [image-20200227-073202.png](attachments/606896133/607027214.png) (image/png)
                                  

                                                            ![](images/icons/bullet_blue.gif)
                                [image-20200227-073202.png](attachments/606896133/607027222.png) (image/png)
                                  

                                                    </div>
                    </div>
                    
                                                      
                </div>             </div> 
            <div id="footer" role="contentinfo">
                <section class="footer-body">
                    Document generated by Confluence on Sep 22, 2020 13:50
                    <div id="footer-logo">[Atlassian](http://www.atlassian.com/)</div>
                </section>
            </div>
        </div>     

