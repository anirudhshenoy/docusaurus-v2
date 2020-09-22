
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
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : app.prediction&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Praneeth Kumar Reddy B</span>, last modified on Jan 30, 2020
                        </div>
                    <div id="main-content" class="wiki-content group">
                    This object contains all the predicted information from the data entered by the user<div class="toc-macro rbtoc1600762812862">

- [Arrays](#app.prediction-Arrays)
        
    - [global_entities](#app.prediction-global_entities)
            
        - [example](#app.prediction-example)
        
        
    

- [Objects](#app.prediction-Objects)
        
    - [intents](#app.prediction-intents)
            
        - [example](#app.prediction-example.1)
        
        
    - [parser](#app.prediction-parser)
            
        - [example](#app.prediction-example.2)
        
        
    - [entities](#app.prediction-entities)
            
        - [example](#app.prediction-example.3)
        
        
    - [global_model](#app.prediction-global_model)
            
        - [example](#app.prediction-example.4)
        
        
    

- [Properties](#app.prediction-Properties)
        
    - [core | boolean](#app.prediction-core|boolean)
            
        - [example](#app.prediction-example.5)
        
        
    - [language_detected | string](#app.prediction-language_detected|string)
            
        - [example](#app.prediction-example.6)
        
        
    - [sentiment | string](#app.prediction-sentiment|string)
            
        - [example](#app.prediction-example.7)
        
        
    - [text | string](#app.prediction-text|string)
            
        - [example](#app.prediction-example.8)
        
        
    - [confidence | int](#app.prediction-confidence|int)
            
        - [example](#app.prediction-example.9)
        
        
    - [synonym_detected | boolean](#app.prediction-synonym_detected|boolean)
            
        - [example](#app.prediction-example.10)
        
        
    - [intent | string](#app.prediction-intent|string)
            
        - [example](#app.prediction-example.11)
        
        
    


</div>- - -<div id="expander-1081707638" class="expand-container"><div id="expander-control-1081707638" class="expand-control"><span class="expand-control-icon">![](images/icons/grey_arrow_down.png)</span><span class="expand-control-text">Typical prediction object</span></div><div id="expander-content-1081707638" class="expand-content"><div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">{
  core: false,
  intents: {
    weather-report: 0.3,
    trigger1: 0.111,
    trigger2: 0.123,
    get-function-data: 0.381
  },
  language_detected: "en",
  sentiment: "neutral",
  text: "i want to book movie tickets for tomorrow",
  parser: {
    noun_chunks: [
      {
        dep: "nsubj",
        chunk: "i",
        root_text: "want",
        tag: "PRP",
        pos: "PRON"
      },
      {
        dep: "dobj",
        chunk: "movie tickets",
        root_text: "book",
        tag: "NNS",
        pos: "NOUN"
      },
      {
        dep: "pobj",
        chunk: "tomorrow",
        root_text: "for",
        tag: "NN",
        pos: "NOUN"
      }
    ],
    lemmas: [
      "want",
      "book",
      "movie",
      "ticket",
      "tomorrow"
    ],
    sentences: [
      "i want to book movie tickets for tomorrow"
    ],
    tokens: [
      {
        text: "i",
        pos: "PRON",
        lemma: "i"
      },
      {
        text: "want",
        pos: "VERB",
        lemma: "want"
      },
      {
        text: "to",
        pos: "PART",
        lemma: "to"
      },
      {
        text: "book",
        pos: "VERB",
        lemma: "book"
      },
      {
        text: "movie",
        pos: "NOUN",
        lemma: "movie"
      },
      {
        text: "tickets",
        pos: "NOUN",
        lemma: "ticket"
      },
      {
        text: "for",
        pos: "ADP",
        lemma: "for"
      },
      {
        text: "tomorrow",
        pos: "NOUN",
        lemma: "tomorrow"
      }
    ],
    entities: [
      {
        text: "Tomorrow",
        label: "DATE"
      }
    ],
    other_keywords: [
      {
        text: "want",
        pos: "VERB",
        lemma: "want"
      },
      {
        text: "book",
        pos: "VERB",
        lemma: "book"
      },
      {
        text: "movie",
        pos: "NOUN",
        lemma: "movie"
      },
      {
        text: "tickets",
        pos: "NOUN",
        lemma: "ticket"
      },
      {
        text: "tomorrow",
        pos: "NOUN",
        lemma: "tomorrow"
      }
    ],
    parsed_tree: [
      {
        head_pos: 100,
        dep: "nsubj",
        text: "i",
        pos: "PRON",
        head_text: "want",
        children: []
      },
      {
        head_pos: 100,
        dep: "ROOT",
        text: "want",
        pos: "VERB",
        head_text: "want",
        children: [
          "i",
          "book"
        ]
      },
      {
        head_pos: 100,
        dep: "aux",
        text: "to",
        pos: "PART",
        head_text: "book",
        children: []
      },
      {
        head_pos: 100,
        dep: "xcomp",
        text: "book",
        pos: "VERB",
        head_text: "want",
        children: [
          "to",
          "tickets",
          "for"
        ]
      },
      {
        head_pos: 92,
        dep: "compound",
        text: "movie",
        pos: "NOUN",
        head_text: "tickets",
        children: []
      },
      {
        head_pos: 100,
        dep: "dobj",
        text: "tickets",
        pos: "NOUN",
        head_text: "book",
        children: [
          "movie"
        ]
      },
      {
        head_pos: 100,
        dep: "prep",
        text: "for",
        pos: "ADP",
        head_text: "book",
        children: [
          "tomorrow"
        ]
      },
      {
        head_pos: 85,
        dep: "pobj",
        text: "tomorrow",
        pos: "NOUN",
        head_text: "for",
        children: []
      }
    ],
    lemma_list: [
      {
        lemma: "want",
        pos: "VERB",
        text: "want"
      },
      {
        lemma: "book",
        pos: "VERB",
        text: "book"
      },
      {
        lemma: "movie",
        pos: "NOUN",
        text: "movie"
      },
      {
        lemma: "ticket",
        pos: "NOUN",
        text: "tickets"
      },
      {
        lemma: "tomorrow",
        pos: "NOUN",
        text: "tomorrow"
      }
    ]
  },
  confidence: 0.381,
  global_entities: [
    {
      text: "Tomorrow",
      label: "DATE"
    }
  ],
  entities: {
    date: [
      {
        text: "tomorrow",
        value: {
          grain: "day",
          value: "2020-01-30T00:00:00.000Z",
          others: [
            {
              grain: "day",
              value: "2020-01-30T00:00:00.000Z"
            }
          ]
        }
      }
    ]
  },
  synonym_detected: false,
  intent: "get-function-data",
  global_model: {
    confidence: 0.5346315503120422,
    intent: "what"
  },
  response: {}
}</pre>
</div></div></div></div>## Arrays### global_entitiesThis array contains global entity objects#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">global_entities: [
      {
        text: "Tomorrow",
        label: "DATE"
      }
]</pre>
</div></div>- - -## Objects### intentsThis object contains all the predicted intents (matched intents)#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"intents": {
      weather-report: 0.3,
      trigger1: 0.111,
      trigger2: 0.123,
      get-function-data: 0.381
}</pre>
</div></div>- - -### parserThis object contains parsed data i.e. `noun_chunks`, `lemmas`, `sentence`, `tokens`, `entities`, `other_keywords`, `parsed_tree`, `lemma_list`, #### exampleI*want to book movie tickets for tomorrow*<div id="expander-872397202" class="expand-container"><div id="expander-control-872397202" class="expand-control"><span class="expand-control-icon">![](images/icons/grey_arrow_down.png)</span><span class="expand-control-text">parser object</span></div><div id="expander-content-872397202" class="expand-content"><div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">parser: {
      noun_chunks: [
        {
          dep: "nsubj",
          chunk: "i",
          root_text: "want",
          tag: "PRP",
          pos: "PRON"
        },
        {
          dep: "dobj",
          chunk: "movie tickets",
          root_text: "book",
          tag: "NNS",
          pos: "NOUN"
        },
        {
          dep: "pobj",
          chunk: "tomorrow",
          root_text: "for",
          tag: "NN",
          pos: "NOUN"
        }
      ],
      lemmas: [
        "want",
        "book",
        "movie",
        "ticket",
        "tomorrow"
      ],
      sentences: [
        "i want to book movie tickets for tomorrow"
      ],
      tokens: [
        {
          text: "i",
          pos: "PRON",
          lemma: "i"
        },
        {
          text: "want",
          pos: "VERB",
          lemma: "want"
        },
        {
          text: "to",
          pos: "PART",
          lemma: "to"
        },
        {
          text: "book",
          pos: "VERB",
          lemma: "book"
        },
        {
          text: "movie",
          pos: "NOUN",
          lemma: "movie"
        },
        {
          text: "tickets",
          pos: "NOUN",
          lemma: "ticket"
        },
        {
          text: "for",
          pos: "ADP",
          lemma: "for"
        },
        {
          text: "tomorrow",
          pos: "NOUN",
          lemma: "tomorrow"
        }
      ],
      entities: [
        {
          text: "Tomorrow",
          label: "DATE"
        }
      ],
      other_keywords: [
        {
          text: "want",
          pos: "VERB",
          lemma: "want"
        },
        {
          text: "book",
          pos: "VERB",
          lemma: "book"
        },
        {
          text: "movie",
          pos: "NOUN",
          lemma: "movie"
        },
        {
          text: "tickets",
          pos: "NOUN",
          lemma: "ticket"
        },
        {
          text: "tomorrow",
          pos: "NOUN",
          lemma: "tomorrow"
        }
      ],
      parsed_tree: [
        {
          head_pos: 100,
          dep: "nsubj",
          text: "i",
          pos: "PRON",
          head_text: "want",
          children: []
        },
        {
          head_pos: 100,
          dep: "ROOT",
          text: "want",
          pos: "VERB",
          head_text: "want",
          children: [
            "i",
            "book"
          ]
        },
        {
          head_pos: 100,
          dep: "aux",
          text: "to",
          pos: "PART",
          head_text: "book",
          children: []
        },
        {
          head_pos: 100,
          dep: "xcomp",
          text: "book",
          pos: "VERB",
          head_text: "want",
          children: [
            "to",
            "tickets",
            "for"
          ]
        },
        {
          head_pos: 92,
          dep: "compound",
          text: "movie",
          pos: "NOUN",
          head_text: "tickets",
          children: []
        },
        {
          head_pos: 100,
          dep: "dobj",
          text: "tickets",
          pos: "NOUN",
          head_text: "book",
          children: [
            "movie"
          ]
        },
        {
          head_pos: 100,
          dep: "prep",
          text: "for",
          pos: "ADP",
          head_text: "book",
          children: [
            "tomorrow"
          ]
        },
        {
          head_pos: 85,
          dep: "pobj",
          text: "tomorrow",
          pos: "NOUN",
          head_text: "for",
          children: []
        }
      ],
      lemma_list: [
        {
          lemma: "want",
          pos: "VERB",
          text: "want"
        },
        {
          lemma: "book",
          pos: "VERB",
          text: "book"
        },
        {
          lemma: "movie",
          pos: "NOUN",
          text: "movie"
        },
        {
          lemma: "ticket",
          pos: "NOUN",
          text: "tickets"
        },
        {
          lemma: "tomorrow",
          pos: "NOUN",
          text: "tomorrow"
        }
      ]
    }</pre>
</div></div></div></div>- - -### entitiesThis object contains entities trained for matching and global entities like date, city, etc..#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">entities: {
      date: [
        {
          text: "tomorrow",
          value: {
            grain: "day",
            value: "2020-01-30T00:00:00.000Z",
            others: [
              {
                grain: "day",
                value: "2020-01-30T00:00:00.000Z"
              }
            ]
          }
        }
      ]
}</pre>
</div></div>- - -### global_modelThis object contains confidence and intent values#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">global_model: {
      confidence: 0.5346315503120422,
      intent: "what"
}</pre>
</div></div>- - -## Properties### core | `boolean`Has the boolean value#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"core" : false</pre>
</div></div>- - -### language_detected | `string`Has the value of detected language code#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"language_detected": "en"</pre>
</div></div>- - -### sentiment | `string`Has the sentiment value of entered text i.e. `positive`, `negative` and `neutral`.#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"sentiment": "neutral"</pre>
</div></div>- - -### text | `string`Has the value of exact text entered by the user#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"text": "i want to book movie tickets for tomorrow"</pre>
</div></div>- - -### confidence | `int`Has the max value of confidence among matched intents #### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"confidence": 0.381</pre>
</div></div>- - -### synonym_detected | `boolean`Has the boolean value about synonyms detected or not #### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"synonym_detected": false</pre>
</div></div>- - -### intent | `string`Has the slug name of highest confidence intent matched#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"intent": "get-function-data"</pre>
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

