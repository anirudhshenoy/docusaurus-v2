
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
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : sendTextMessage&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Siddharth Goel</span>, last modified on Apr 28, 2019
                        </div>
                    <div id="main-content" class="wiki-content group">
                    The process to send text messages in the bot# Use caseSo, the main purpose of a bot is to have a conversation with a user and simultaneously serve the requests.A text message is the most basic form of serving those requests by sending the reply back as you can most probably guess, a text message.  
In the majority of cases, a text message is all we need.An additional benefit of using a plain old text message is that it is supported by every channel, be it chat, voice and even calls!  
So, text messages are very useful despite being very basic in how it can be formatted.# Format of the Function<pre>  
</pre>    app.sendTextMessage(<span class="hljs-string" style="color: rgb(42, 161, 152);">`Your message with value <span class="hljs-subst" style="color: rgb(203, 75, 22);">${variable_name}</span>`</span>).then(() =&gt; {
        <span class="hljs-comment" style="color: rgb(88, 110, 117);">// do this part if something has to be done only after sending the message</span>
    })<pre>  
</pre>So, there is no parameter that needs to be passed apart from the obvious message that we want to display.The message is generally a string but a variable’s value can be directly passed too.  
Another popular way to pass the variable value is to use<span>&nbsp;</span>``` `` ```<span>&nbsp;</span>notation (present just below Esc key) and write your message as you will and add a variable value as<span>&nbsp;</span>`${variable_name}`.**Note :**<span>&nbsp;</span>If the variable is a<span>&nbsp;</span>`JS Object`<span>&nbsp;</span>or a<span>&nbsp;</span>`JSON Object`, then using<span>&nbsp;</span>`JSON.stringify(variable_name)`<span>&nbsp;</span>would be better so that you don’t miss any of the fields.  
**Note :**<span>&nbsp;</span>It would be better to not use text messages to display an object in practice, apart from testing and debugging purposes.**Note :**<span style="color: rgb(55, 61, 73);"><span>&nbsp;</span>The function is asynchronous and hence it may happen that the text message may not come in the order that you expect. So, since the function is<span>&nbsp;</span></span>*Promisified*<span style="color: rgb(55, 61, 73);"><span>&nbsp;</span>writing further instructions inside the<span>&nbsp;</span></span>`.then`<span style="color: rgb(55, 61, 73);"><span>&nbsp;</span>block is the best practice.</span>
                    </div>

                    
                                                      
                </div>             </div> 
            <div id="footer" role="contentinfo">
                <section class="footer-body">
                    Document generated by Confluence on Sep 22, 2020 13:50
                    <div id="footer-logo">[Atlassian](http://www.atlassian.com/)</div>
                </section>
            </div>
        </div>     
