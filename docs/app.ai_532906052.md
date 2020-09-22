
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
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : app.ai&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Harish Mukkara</span>, last modified on Jan 30, 2020
                        </div>
                    <div id="main-content" class="wiki-content group">
                    This object contains methods to access some of the NLP features in the platform to process sentences/words or to train ML models.<div class="toc-macro rbtoc1600762812583">

- [Methods](#app.ai-Methods)
- [predict](#app.ai-predict)
        
    - [Syntax](#app.ai-Syntax)
    - [parameters](#app.ai-parameters)
            
        - [text | string](#app.ai-text|string)
        - [source | optional | string](#app.ai-source|optional|string)
        
        
    - [Return Value | Promise](#app.ai-ReturnValue|Promise)
    - [Example](#app.ai-Example)
    

- [predictMultiple](#app.ai-predictMultiple)
        
    - [Syntax](#app.ai-Syntax.1)
    - [parameters](#app.ai-parameters.1)
            
        - [text | string](#app.ai-text|string.1)
        - [botIds | Array](#app.ai-botIds|Array)
        
        
    - [Return Value | Promise](#app.ai-ReturnValue|Promise.1)
    - [Example](#app.ai-Example.1)
    

- [predictHack](#app.ai-predictHack)
        
    - [Syntax](#app.ai-Syntax.2)
    - [parameters](#app.ai-parameters.2)
            
        - [text | string](#app.ai-text|string.2)
        - [botId | String](#app.ai-botId|String)
        
        
    - [Return Value | Promise](#app.ai-ReturnValue|Promise.2)
    - [Example](#app.ai-Example.2)
    

- [nlp](#app.ai-nlp)
        
    - [Syntax](#app.ai-Syntax.3)
    - [parameters](#app.ai-parameters.3)
            
        - [text | string](#app.ai-text|string.3)
        
        
    - [Return Value | Promise](#app.ai-ReturnValue|Promise.3)
    - [Example](#app.ai-Example.3)
    

- [addTraining](#app.ai-addTraining)
        
    - [Syntax](#app.ai-Syntax.4)
    - [parameters](#app.ai-parameters.4)
            
        - [text | string](#app.ai-text|string.4)
        - [intent | string](#app.ai-intent|string)
        
        
    - [Return Value | Promise](#app.ai-ReturnValue|Promise.4)
    - [Example](#app.ai-Example.4)
    

- [trainIntents](#app.ai-trainIntents)
        
    - [Syntax](#app.ai-Syntax.5)
    - [Return Value | Promise](#app.ai-ReturnValue|Promise.5)
    - [Example](#app.ai-Example.5)
    

- [addToUnIdentifiedList](#app.ai-addToUnIdentifiedList)
        
    - [Syntax](#app.ai-Syntax.6)
    - [Return Value | Promise](#app.ai-ReturnValue|Promise.6)
    - [Example](#app.ai-Example.6)
    


</div>- - -## Methods## predictThe&nbsp;`app.ai.predict`&nbsp;method accepts a string and returns the prediction to the string.### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.ai.predict(text, context, entityThreshold, source='yellowmessenger')</pre>
</div></div>### parameters#### text  |  `string`A word or sentence to which we want the prediction.#### source  | `optional` | `string` A string representing the source of the message### Return Value | `Promise`Returns a promise. Promises resolve an object representing the result of the prediction. ### Example<div id="expander-1496117743" class="expand-container"><div id="expander-control-1496117743" class="expand-control"><span class="expand-control-icon">![](images/icons/grey_arrow_down.png)</span><span class="expand-control-text">expand to view..</span></div><div id="expander-content-1496117743" class="expand-content"><div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">app.ai.predict('what is my ip?')
  .then(result =&gt; app.log(reslut));
  
// the output will look like
{
    "core": false,
    "intents": {
        "geo-location": 0.997
    },
    "language_detected": "en",
    "sentiment": "neutral",
    "text": "what is my ip?",
    "parser": {
        "noun_chunks": [
            {
                "dep": "attr",
                "chunk": "what",
                "root_text": "is",
                "tag": "WP",
                "pos": "PRON"
            },
            {
                "dep": "nsubj",
                "chunk": "my ip",
                "root_text": "is",
                "tag": "NN",
                "pos": "NOUN"
            }
        ],
        "lemmas": [
            "what",
            "-PRON-",
            "ip",
            "?"
        ],
        "sentences": [
            "what is my ip?"
        ],
        "tokens": [
            {
                "text": "what",
                "pos": "PRON",
                "lemma": "what"
            },
            {
                "text": "is",
                "pos": "VERB",
                "lemma": "be"
            },
            {
                "text": "my",
                "pos": "DET",
                "lemma": "-PRON-"
            },
            {
                "text": "ip",
                "pos": "NOUN",
                "lemma": "ip"
            },
            {
                "text": "?",
                "pos": "PUNCT",
                "lemma": "?"
            }
        ],
        "entities": [],
        "other_keywords": [
            {
                "text": "what",
                "pos": "PRON",
                "lemma": "what"
            },
            {
                "text": "my",
                "pos": "DET",
                "lemma": "-PRON-"
            },
            {
                "text": "ip",
                "pos": "NOUN",
                "lemma": "ip"
            },
            {
                "text": "?",
                "pos": "PUNCT",
                "lemma": "?"
            }
        ],
        "parsed_tree": [
            {
                "head_pos": 100,
                "dep": "attr",
                "text": "what",
                "pos": "PRON",
                "head_text": "is",
                "children": []
            },
            {
                "head_pos": 100,
                "dep": "ROOT",
                "text": "is",
                "pos": "VERB",
                "head_text": "is",
                "children": [
                    "what",
                    "ip",
                    "?"
                ]
            },
            {
                "head_pos": 92,
                "dep": "poss",
                "text": "my",
                "pos": "DET",
                "head_text": "ip",
                "children": []
            },
            {
                "head_pos": 100,
                "dep": "nsubj",
                "text": "ip",
                "pos": "NOUN",
                "head_text": "is",
                "children": [
                    "my"
                ]
            },
            {
                "head_pos": 100,
                "dep": "punct",
                "text": "?",
                "pos": "PUNCT",
                "head_text": "is",
                "children": []
            }
        ],
        "lemma_list": [
            {
                "lemma": "what",
                "pos": "PRON",
                "text": "what"
            },
            {
                "lemma": "-PRON-",
                "pos": "DET",
                "text": "my"
            },
            {
                "lemma": "ip",
                "pos": "NOUN",
                "text": "ip"
            },
            {
                "lemma": "?",
                "pos": "PUNCT",
                "text": "?"
            }
        ]
    },
    "confidence": 0.997,
    "global_entities": [],
    "synonym_detected": false,
    "intent": "geo-location",
    "global_model": {
        "confidence": 0.8341319561004639,
        "intent": "what"
    }
}</pre>
</div></div></div></div>- - -## predictMultipleThe&nbsp;`app.ai.predictMultiple`&nbsp;method accepts a string representing a sentence/words and a list of bot IDs as a second parameter.  It returns the prediction of the given sentence/words by each bot.### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">    app.ai.predictMultiple(text, [botId,...])</pre>
</div></div>### parameters#### text  |  `string`A word or sentence to which we want the prediction.#### botIds  | `Array` An array representing the list of bot IDs.### Return Value | `Promise`Returns a promise. Promises resolve an Array of objects representing each bot prediction. ### Example<div id="expander-1183678015" class="expand-container"><div id="expander-control-1183678015" class="expand-control"><span class="expand-control-icon">![](images/icons/grey_arrow_down.png)</span><span class="expand-control-text">expand to view...</span></div><div id="expander-content-1183678015" class="expand-content"><div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">app.ai.predictMultiple('what is my ip?', ['x123456789', 'x987654321'])
    .then(result =&gt; app.log(reslut));

// the output will look like
[
    {
        "core": false,
        "intents": {
            "geo-location": 0.997
        },
        "language_detected": "en",
        "sentiment": "neutral",
        "text": "what is my ip?",
        "parser": {
            "noun_chunks": [
                {
                    "dep": "attr",
                    "chunk": "what",
                    "root_text": "is",
                    "tag": "WP",
                    "pos": "PRON"
                },
                {
                    "dep": "nsubj",
                    "chunk": "my ip",
                    "root_text": "is",
                    "tag": "NN",
                    "pos": "NOUN"
                }
            ],
            "lemmas": [
                "what",
                "-PRON-",
                "ip",
                "?"
            ],
            "sentences": [
                "what is my ip?"
            ],
            "tokens": [
                {
                    "text": "what",
                    "pos": "PRON",
                    "lemma": "what"
                },
                {
                    "text": "is",
                    "pos": "VERB",
                    "lemma": "be"
                },
                {
                    "text": "my",
                    "pos": "DET",
                    "lemma": "-PRON-"
                },
                {
                    "text": "ip",
                    "pos": "NOUN",
                    "lemma": "ip"
                },
                {
                    "text": "?",
                    "pos": "PUNCT",
                    "lemma": "?"
                }
            ],
            "entities": [],
            "other_keywords": [
                {
                    "text": "what",
                    "pos": "PRON",
                    "lemma": "what"
                },
                {
                    "text": "my",
                    "pos": "DET",
                    "lemma": "-PRON-"
                },
                {
                    "text": "ip",
                    "pos": "NOUN",
                    "lemma": "ip"
                },
                {
                    "text": "?",
                    "pos": "PUNCT",
                    "lemma": "?"
                }
            ],
            "parsed_tree": [
                {
                    "head_pos": 100,
                    "dep": "attr",
                    "text": "what",
                    "pos": "PRON",
                    "head_text": "is",
                    "children": []
                },
                {
                    "head_pos": 100,
                    "dep": "ROOT",
                    "text": "is",
                    "pos": "VERB",
                    "head_text": "is",
                    "children": [
                        "what",
                        "ip",
                        "?"
                    ]
                },
                {
                    "head_pos": 92,
                    "dep": "poss",
                    "text": "my",
                    "pos": "DET",
                    "head_text": "ip",
                    "children": []
                },
                {
                    "head_pos": 100,
                    "dep": "nsubj",
                    "text": "ip",
                    "pos": "NOUN",
                    "head_text": "is",
                    "children": [
                        "my"
                    ]
                },
                {
                    "head_pos": 100,
                    "dep": "punct",
                    "text": "?",
                    "pos": "PUNCT",
                    "head_text": "is",
                    "children": []
                }
            ],
            "lemma_list": [
                {
                    "lemma": "what",
                    "pos": "PRON",
                    "text": "what"
                },
                {
                    "lemma": "-PRON-",
                    "pos": "DET",
                    "text": "my"
                },
                {
                    "lemma": "ip",
                    "pos": "NOUN",
                    "text": "ip"
                },
                {
                    "lemma": "?",
                    "pos": "PUNCT",
                    "text": "?"
                }
            ]
        },
        "confidence": 0.997,
        "global_entities": [],
        "synonym_detected": false,
        "intent": "geo-location",
        "global_model": {
            "confidence": 0.8341319561004639,
            "intent": "what"
        }
    },
    {
        "core": false,
        "intents": {
            "geo-location": 0.997
        },
        "language_detected": "en",
        "sentiment": "neutral",
        "text": "what is my ip?",
        "parser": {
            "noun_chunks": [
                {
                    "dep": "attr",
                    "chunk": "what",
                    "root_text": "is",
                    "tag": "WP",
                    "pos": "PRON"
                },
                {
                    "dep": "nsubj",
                    "chunk": "my ip",
                    "root_text": "is",
                    "tag": "NN",
                    "pos": "NOUN"
                }
            ],
            "lemmas": [
                "what",
                "-PRON-",
                "ip",
                "?"
            ],
            "sentences": [
                "what is my ip?"
            ],
            "tokens": [
                {
                    "text": "what",
                    "pos": "PRON",
                    "lemma": "what"
                },
                {
                    "text": "is",
                    "pos": "VERB",
                    "lemma": "be"
                },
                {
                    "text": "my",
                    "pos": "DET",
                    "lemma": "-PRON-"
                },
                {
                    "text": "ip",
                    "pos": "NOUN",
                    "lemma": "ip"
                },
                {
                    "text": "?",
                    "pos": "PUNCT",
                    "lemma": "?"
                }
            ],
            "entities": [],
            "other_keywords": [
                {
                    "text": "what",
                    "pos": "PRON",
                    "lemma": "what"
                },
                {
                    "text": "my",
                    "pos": "DET",
                    "lemma": "-PRON-"
                },
                {
                    "text": "ip",
                    "pos": "NOUN",
                    "lemma": "ip"
                },
                {
                    "text": "?",
                    "pos": "PUNCT",
                    "lemma": "?"
                }
            ],
            "parsed_tree": [
                {
                    "head_pos": 100,
                    "dep": "attr",
                    "text": "what",
                    "pos": "PRON",
                    "head_text": "is",
                    "children": []
                },
                {
                    "head_pos": 100,
                    "dep": "ROOT",
                    "text": "is",
                    "pos": "VERB",
                    "head_text": "is",
                    "children": [
                        "what",
                        "ip",
                        "?"
                    ]
                },
                {
                    "head_pos": 92,
                    "dep": "poss",
                    "text": "my",
                    "pos": "DET",
                    "head_text": "ip",
                    "children": []
                },
                {
                    "head_pos": 100,
                    "dep": "nsubj",
                    "text": "ip",
                    "pos": "NOUN",
                    "head_text": "is",
                    "children": [
                        "my"
                    ]
                },
                {
                    "head_pos": 100,
                    "dep": "punct",
                    "text": "?",
                    "pos": "PUNCT",
                    "head_text": "is",
                    "children": []
                }
            ],
            "lemma_list": [
                {
                    "lemma": "what",
                    "pos": "PRON",
                    "text": "what"
                },
                {
                    "lemma": "-PRON-",
                    "pos": "DET",
                    "text": "my"
                },
                {
                    "lemma": "ip",
                    "pos": "NOUN",
                    "text": "ip"
                },
                {
                    "lemma": "?",
                    "pos": "PUNCT",
                    "text": "?"
                }
            ]
        },
        "confidence": 0.997,
        "global_entities": [],
        "synonym_detected": false,
        "intent": "geo-location",
        "global_model": {
            "confidence": 0.8341319561004639,
            "intent": "what"
        }
    }
]</pre>
</div></div>

</div></div>
- - -
## predictHack
The&nbsp;`app.ai.predictHack`&nbsp;method accepts a string representing a sentence/words and a bot ID as a second parameter.  It returns the prediction of the given sentence/words.
### Syntax
<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">    app.ai.predictHack(text, botId)</pre>
</div></div>
### parameters
#### text  |  `string`
A word or sentence to which we want the prediction.
#### botId  | `String` 
A string representing the list of bot IDs. eg. `x123456789`
### Return Value | `Promise`
Returns a promise. Promises resolve an object representing the result of the prediction. 
### Example
<div id="expander-1995000493" class="expand-container"><div id="expander-control-1995000493" class="expand-control"><span class="expand-control-icon">![](images/icons/grey_arrow_down.png)</span><span class="expand-control-text">expand to view...</span></div><div id="expander-content-1995000493" class="expand-content"><div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">{
        "core": false,
        "intents": {
            "geo-location": 0.997
        },
        "language_detected": "en",
        "sentiment": "neutral",
        "text": "what is my ip?",
        "parser": {
            "noun_chunks": [
                {
                    "dep": "attr",
                    "chunk": "what",
                    "root_text": "is",
                    "tag": "WP",
                    "pos": "PRON"
                },
                {
                    "dep": "nsubj",
                    "chunk": "my ip",
                    "root_text": "is",
                    "tag": "NN",
                    "pos": "NOUN"
                }
            ],
            "lemmas": [
                "what",
                "-PRON-",
                "ip",
                "?"
            ],
            "sentences": [
                "what is my ip?"
            ],
            "tokens": [
                {
                    "text": "what",
                    "pos": "PRON",
                    "lemma": "what"
                },
                {
                    "text": "is",
                    "pos": "VERB",
                    "lemma": "be"
                },
                {
                    "text": "my",
                    "pos": "DET",
                    "lemma": "-PRON-"
                },
                {
                    "text": "ip",
                    "pos": "NOUN",
                    "lemma": "ip"
                },
                {
                    "text": "?",
                    "pos": "PUNCT",
                    "lemma": "?"
                }
            ],
            "entities": [],
            "other_keywords": [
                {
                    "text": "what",
                    "pos": "PRON",
                    "lemma": "what"
                },
                {
                    "text": "my",
                    "pos": "DET",
                    "lemma": "-PRON-"
                },
                {
                    "text": "ip",
                    "pos": "NOUN",
                    "lemma": "ip"
                },
                {
                    "text": "?",
                    "pos": "PUNCT",
                    "lemma": "?"
                }
            ],
            "parsed_tree": [
                {
                    "head_pos": 100,
                    "dep": "attr",
                    "text": "what",
                    "pos": "PRON",
                    "head_text": "is",
                    "children": []
                },
                {
                    "head_pos": 100,
                    "dep": "ROOT",
                    "text": "is",
                    "pos": "VERB",
                    "head_text": "is",
                    "children": [
                        "what",
                        "ip",
                        "?"
                    ]
                },
                {
                    "head_pos": 92,
                    "dep": "poss",
                    "text": "my",
                    "pos": "DET",
                    "head_text": "ip",
                    "children": []
                },
                {
                    "head_pos": 100,
                    "dep": "nsubj",
                    "text": "ip",
                    "pos": "NOUN",
                    "head_text": "is",
                    "children": [
                        "my"
                    ]
                },
                {
                    "head_pos": 100,
                    "dep": "punct",
                    "text": "?",
                    "pos": "PUNCT",
                    "head_text": "is",
                    "children": []
                }
            ],
            "lemma_list": [
                {
                    "lemma": "what",
                    "pos": "PRON",
                    "text": "what"
                },
                {
                    "lemma": "-PRON-",
                    "pos": "DET",
                    "text": "my"
                },
                {
                    "lemma": "ip",
                    "pos": "NOUN",
                    "text": "ip"
                },
                {
                    "lemma": "?",
                    "pos": "PUNCT",
                    "text": "?"
                }
            ]
        },
        "confidence": 0.997,
        "global_entities": [],
        "synonym_detected": false,
        "intent": "geo-location",
        "global_model": {
            "confidence": 0.8341319561004639,
            "intent": "what"
        }
    }</pre>
</div></div>

</div></div>
- - -
## nlp
The&nbsp;`app.ai.nlp`&nbsp;method accepts a string and returns the processed information of the string by the internal NLP engine.
### Syntax
<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.ai.nlp(text)</pre>
</div></div>
### parameters
#### text  |  `string`
A word or sentence to which we want to process with NLP engine.
### Return Value | `Promise`
Returns a promise. Promises resolve an object representing the processed information of the string by the internal NLP engine.
### Example
<div id="expander-635077822" class="expand-container"><div id="expander-control-635077822" class="expand-control"><span class="expand-control-icon">![](images/icons/grey_arrow_down.png)</span><span class="expand-control-text">expand to view..</span></div><div id="expander-content-635077822" class="expand-content"><div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">{
    "noun_chunks": [
        {
            "dep": "attr",
            "chunk": "what",
            "root_text": "is",
            "tag": "WP",
            "pos": "PRON"
        },
        {
            "dep": "nsubj",
            "chunk": "my ip",
            "root_text": "is",
            "tag": "NN",
            "pos": "NOUN"
        }
    ],
    "lemmas": [
        "what",
        "-PRON-",
        "ip",
        "?"
    ],
    "sentences": [
        "what is my ip?"
    ],
    "tokens": [
        {
            "text": "what",
            "pos": "PRON",
            "lemma": "what"
        },
        {
            "text": "is",
            "pos": "VERB",
            "lemma": "be"
        },
        {
            "text": "my",
            "pos": "DET",
            "lemma": "-PRON-"
        },
        {
            "text": "ip",
            "pos": "NOUN",
            "lemma": "ip"
        },
        {
            "text": "?",
            "pos": "PUNCT",
            "lemma": "?"
        }
    ],
    "entities": [],
    "other_keywords": [
        {
            "text": "what",
            "pos": "PRON",
            "lemma": "what"
        },
        {
            "text": "my",
            "pos": "DET",
            "lemma": "-PRON-"
        },
        {
            "text": "ip",
            "pos": "NOUN",
            "lemma": "ip"
        },
        {
            "text": "?",
            "pos": "PUNCT",
            "lemma": "?"
        }
    ],
    "parsed_tree": [
        {
            "head_pos": 100,
            "dep": "attr",
            "text": "what",
            "pos": "PRON",
            "head_text": "is",
            "children": []
        },
        {
            "head_pos": 100,
            "dep": "ROOT",
            "text": "is",
            "pos": "VERB",
            "head_text": "is",
            "children": [
                "what",
                "ip",
                "?"
            ]
        },
        {
            "head_pos": 92,
            "dep": "poss",
            "text": "my",
            "pos": "DET",
            "head_text": "ip",
            "children": []
        },
        {
            "head_pos": 100,
            "dep": "nsubj",
            "text": "ip",
            "pos": "NOUN",
            "head_text": "is",
            "children": [
                "my"
            ]
        },
        {
            "head_pos": 100,
            "dep": "punct",
            "text": "?",
            "pos": "PUNCT",
            "head_text": "is",
            "children": []
        }
    ],
    "lemma_list": [
        {
            "lemma": "what",
            "pos": "PRON",
            "text": "what"
        },
        {
            "lemma": "-PRON-",
            "pos": "DET",
            "text": "my"
        },
        {
            "lemma": "ip",
            "pos": "NOUN",
            "text": "ip"
        },
        {
            "lemma": "?",
            "pos": "PUNCT",
            "text": "?"
        }
    ]
}
</pre>
</div></div></div></div>
- - -
## addTraining
The&nbsp;`app.ai.addTraining`&nbsp;method accepts text &amp; intent name as parameters and adds the text under the user expressions of the specified intent. it returns an object contains the status and id of the added user expression. 
### Syntax
<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.ai.addTraining(text, intent)</pre>
</div></div>
### parameters
#### text  |  `string`
A word or sentence to which we want the prediction.
#### intent   | `string` 
A string representing the intent in the bot to which the current text to be added under user expressions.
### Return Value | `Promise`
Returns a promise. Promises resolve an object representing the status of addition. 
### Example
<div id="expander-1005386771" class="expand-container"><div id="expander-control-1005386771" class="expand-control"><span class="expand-control-icon">![](images/icons/grey_arrow_down.png)</span><span class="expand-control-text">expand to view..</span></div><div id="expander-content-1005386771" class="expand-content"><div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">app.ai.addTraining('what is my ip?','ip-list')
  .then(result =&gt; app.log(result))
  
// the output will look like

{
    "noun_chunks": [
        {
            "dep": "attr",
            "chunk": "what",
            "root_text": "is",
            "tag": "WP",
            "pos": "PRON"
        },
        {
            "dep": "nsubj",
            "chunk": "my ip",
            "root_text": "is",
            "tag": "NN",
            "pos": "NOUN"
        }
    ],
    "lemmas": [
        "what",
        "-PRON-",
        "ip",
        "?"
    ],
    "sentences": [
        "what is my ip?"
    ],
    "tokens": [
        {
            "text": "what",
            "pos": "PRON",
            "lemma": "what"
        },
        {
            "text": "is",
            "pos": "VERB",
            "lemma": "be"
        },
        {
            "text": "my",
            "pos": "DET",
            "lemma": "-PRON-"
        },
        {
            "text": "ip",
            "pos": "NOUN",
            "lemma": "ip"
        },
        {
            "text": "?",
            "pos": "PUNCT",
            "lemma": "?"
        }
    ],
    "entities": [],
    "other_keywords": [
        {
            "text": "what",
            "pos": "PRON",
            "lemma": "what"
        },
        {
            "text": "my",
            "pos": "DET",
            "lemma": "-PRON-"
        },
        {
            "text": "ip",
            "pos": "NOUN",
            "lemma": "ip"
        },
        {
            "text": "?",
            "pos": "PUNCT",
            "lemma": "?"
        }
    ],
    "parsed_tree": [
        {
            "head_pos": 100,
            "dep": "attr",
            "text": "what",
            "pos": "PRON",
            "head_text": "is",
            "children": []
        },
        {
            "head_pos": 100,
            "dep": "ROOT",
            "text": "is",
            "pos": "VERB",
            "head_text": "is",
            "children": [
                "what",
                "ip",
                "?"
            ]
        },
        {
            "head_pos": 92,
            "dep": "poss",
            "text": "my",
            "pos": "DET",
            "head_text": "ip",
            "children": []
        },
        {
            "head_pos": 100,
            "dep": "nsubj",
            "text": "ip",
            "pos": "NOUN",
            "head_text": "is",
            "children": [
                "my"
            ]
        },
        {
            "head_pos": 100,
            "dep": "punct",
            "text": "?",
            "pos": "PUNCT",
            "head_text": "is",
            "children": []
        }
    ],
    "lemma_list": [
        {
            "lemma": "what",
            "pos": "PRON",
            "text": "what"
        },
        {
            "lemma": "-PRON-",
            "pos": "DET",
            "text": "my"
        },
        {
            "lemma": "ip",
            "pos": "NOUN",
            "text": "ip"
        },
        {
            "lemma": "?",
            "pos": "PUNCT",
            "text": "?"
        }
    ]
}
addTraining
15 minutes ago
function (text, intent) {
        return new Promise(function (resolve, reject) {
            request.post({
                url: `${bpConfig.urls.ML}/add-training-internal`,
                qs: {
                    bot: bot
                },
                json: {
                    text: text,
                    intent: intent
                }
            }, (err, response, resp) =&gt; {
                if (err) {
                    reject(err);
                } else {
                    resolve(resp);
                }
            });
        });
    }
predictHack
15 minutes ago
{
    "noun_chunks": [
        {
            "dep": "attr",
            "chunk": "what",
            "root_text": "is",
            "tag": "WP",
            "pos": "PRON"
        },
        {
            "dep": "nsubj",
            "chunk": "my ip",
            "root_text": "is",
            "tag": "NN",
            "pos": "NOUN"
        }
    ],
    "lemmas": [
        "what",
        "-PRON-",
        "ip",
        "?"
    ],
    "sentences": [
        "what is my ip?"
    ],
    "tokens": [
        {
            "text": "what",
            "pos": "PRON",
            "lemma": "what"
        },
        {
            "text": "is",
            "pos": "VERB",
            "lemma": "be"
        },
        {
            "text": "my",
            "pos": "DET",
            "lemma": "-PRON-"
        },
        {
            "text": "ip",
            "pos": "NOUN",
            "lemma": "ip"
        },
        {
            "text": "?",
            "pos": "PUNCT",
            "lemma": "?"
        }
    ],
    "entities": [],
    "other_keywords": [
        {
            "text": "what",
            "pos": "PRON",
            "lemma": "what"
        },
        {
            "text": "my",
            "pos": "DET",
            "lemma": "-PRON-"
        },
        {
            "text": "ip",
            "pos": "NOUN",
            "lemma": "ip"
        },
        {
            "text": "?",
            "pos": "PUNCT",
            "lemma": "?"
        }
    ],
    "parsed_tree": [
        {
            "head_pos": 100,
            "dep": "attr",
            "text": "what",
            "pos": "PRON",
            "head_text": "is",
            "children": []
        },
        {
            "head_pos": 100,
            "dep": "ROOT",
            "text": "is",
            "pos": "VERB",
            "head_text": "is",
            "children": [
                "what",
                "ip",
                "?"
            ]
        },
        {
            "head_pos": 92,
            "dep": "poss",
            "text": "my",
            "pos": "DET",
            "head_text": "ip",
            "children": []
        },
        {
            "head_pos": 100,
            "dep": "nsubj",
            "text": "ip",
            "pos": "NOUN",
            "head_text": "is",
            "children": [
                "my"
            ]
        },
        {
            "head_pos": 100,
            "dep": "punct",
            "text": "?",
            "pos": "PUNCT",
            "head_text": "is",
            "children": []
        }
    ],
    "lemma_list": [
        {
            "lemma": "what",
            "pos": "PRON",
            "text": "what"
        },
        {
            "lemma": "-PRON-",
            "pos": "DET",
            "text": "my"
        },
        {
            "lemma": "ip",
            "pos": "NOUN",
            "text": "ip"
        },
        {
            "lemma": "?",
            "pos": "PUNCT",
            "text": "?"
        }
    ]
}

</pre>
</div></div></div></div>
- - -
## trainIntents
The&nbsp;`app.ai.trainIntents`&nbsp;method trains the ML model with the user expressions added to Journeys
### Syntax
<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.ai.trainIntents()</pre>
</div></div>
### Return Value | `Promise`
Returns a promise. Promises resolve an object representing the status of the training. 
### Example
<div id="expander-1138675685" class="expand-container"><div id="expander-control-1138675685" class="expand-control"><span class="expand-control-icon">![](images/icons/grey_arrow_down.png)</span><span class="expand-control-text">expand to view..</span></div><div id="expander-content-1138675685" class="expand-content"><div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">app.ai.trainIntents()
  .then((status) =&gt; {
  app.log(status');})

// the output will look like
{
    "status": "started"
}</pre>
</div></div></div></div>
- - -
## addToUnIdentifiedList
The&nbsp;`app.ai.addToUnIdentifiedList`&nbsp;method adds given text to the unidentifed list of words of the current user of the bot. It accepts a text, userId, source, app.profile object and sessionID. 
### Syntax
<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.ai.addToUnIdentifiedList('praneth kumar reddy', '', app.source, app.profile, sessionId)</pre>
</div></div>
### Return Value | `Promise`
Returns a promise. Promises resolve an object representing the status of the addition of given text to the unidentified list. 
### Example
<div id="expander-860270818" class="expand-container"><div id="expander-control-860270818" class="expand-control"><span class="expand-control-icon">![](images/icons/grey_arrow_down.png)</span><span class="expand-control-text">expand to view..</span></div><div id="expander-content-860270818" class="expand-content"><div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">app.ai.addToUnIdentifiedList('this is an unknown word', '', app.source, app.profile, sessionId)
 .then((status) =&gt; app.log(status));
 
// the output will look like

{
    "status": "success",
    "_id": "5e32a7*********45e"
}</pre>
</div></div></div></div>
                    </div>

                    
                                                      
                </div>             </div> 
            <div id="footer" role="contentinfo">
                <section class="footer-body">
                    Document generated by Confluence on Sep 22, 2020 13:50
                    <div id="footer-logo">[Atlassian](http://www.atlassian.com/)</div>
                </section>
            </div>
        </div>     

