
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
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : app.feedbackEvent&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Praneeth Kumar Reddy B</span>, last modified on Feb 09, 2020
                        </div>
                    <div id="main-content" class="wiki-content group">
                    This object contains a method `feedbackProvided` to get the feedback event data<div class="toc-macro rbtoc1600762813322">

- [Methods](#app.feedbackEvent-Methods)
- [feedbackProvided](#app.feedbackEvent-feedbackProvided)
        
    - [Syntax](#app.feedbackEvent-Syntax)
    - [Return Value](#app.feedbackEvent-ReturnValue)
    - [Example](#app.feedbackEvent-Example)
    


</div>- - -## Methods## feedbackProvidedThis method returns the feedback event data### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.feedbackEvent.feedbackProvided();</pre>
</div></div>### Return ValueThis method returns an `object` if there is a feedback event otherwise returns `false`### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">let feedback = app.feedbackEvent.feedbackProvided();
app.log(feedback);
//the log will be
//if feedback event is present
{
    "event": "feedback-event",
    "data" : "event-data"
}
//if feedback event is not present
false</pre>
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
