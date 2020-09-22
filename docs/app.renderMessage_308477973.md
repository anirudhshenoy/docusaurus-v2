
        <div id="page">
            <div id="main" class="aui-page-panel">
                <div id="main-header">
                    <div id="breadcrumb-section">
                        
                            1. 
                                    <span>[Documentation](index.html)</span>
                                
                                                    1. 
                                    <span>[API Reference](API-Reference_503021723.html)</span>
                                
                                                    1. 
                                    <span>[Methods](Methods_308609044.html)</span>
                                
                                                
                    </div>
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : app.renderMessage&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Raghu Vamshi S</span> on May 01, 2019
                        </div>
                    <div id="main-content" class="wiki-content group">
                    Refer&nbsp;[this link](https://yellowmessenger.atlassian.net/wiki/spaces/docs/pages/90275883/Language+Translation)&nbsp;for more info.Process to get text message from code.## Use caseThere are lot of instances in functions where bot needs to send responses through code. To get the text message from these codes we use renderMessage in our function.## Format of the function    app.renderMessage(<span class="hljs-string" style="color: rgb(42, 161, 152);">'code-goes-here'</span>,{input parameters <span class="hljs-keyword" style="color: rgb(133, 153, 0);">as</span> object},<span class="hljs-string" style="color: rgb(42, 161, 152);">'default message'</span>)
The first argument is the code that we add in the localization tab.  
The second argument deals with the value you want to pass.  
The third argument sets a fall back message which gets displayed if it is unable to generate the text message.## Usage of the function    app.sendTexMessage(app.renderMessage(<span class="hljs-string" style="color: rgb(42, 161, 152);">"id-number"</span>),{id : id_number},<span class="hljs-string" style="color: rgb(42, 161, 152);">"Here are the details for your login id: {{id_no}}"</span>)
                    </div>

                    
                                                      
                </div>             </div> 
            <div id="footer" role="contentinfo">
                <section class="footer-body">
                    Document generated by Confluence on Sep 22, 2020 13:50
                    <div id="footer-logo">[Atlassian](http://www.atlassian.com/)</div>
                </section>
            </div>
        </div>     
