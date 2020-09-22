
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
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : executeFunction&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Siddharth Goel</span> on Apr 29, 2019
                        </div>
                    <div id="main-content" class="wiki-content group">
                    Process to directly call/execute another function from the Developer section.# Use caseSo, functions introduce modularity in the code. The code becomes more readable, maintainable, and better able to be debugged.htere can come a situation when we have already defined a common function that will be called by many different functions.  
To execute this function, we have to use the<span>&nbsp;</span>`executeFunction`<span>&nbsp;</span>function.# Format of the function    app.executeFunction(<span class="hljs-string" style="color: rgb(42, 161, 152);">'functionName'</span>, args).then((optional_returned_value) =&gt; {
    <span class="hljs-comment" style="color: rgb(88, 110, 117);">// good practice to return resolve if nothing else has to be done, otherwise use the returned value (optional)</span>
        <span class="hljs-keyword" style="color: rgb(133, 153, 0);">return</span> resolve();
     }).catch((e) =&gt; {
         <span class="hljs-comment" style="color: rgb(88, 110, 117);">//handle error</span>
     })
The first argument is the function name that we want to execute.  
The second argument deals with the arguments/parameters that we want the function to use.**Note :**<span>&nbsp;</span>args is a JSON object.    args = {
        time: date,
        mobile: app.context.steps[<span class="hljs-string" style="color: rgb(42, 161, 152);">'phone-number'</span>],
        branch: branch_name,
        documents: documents,
        address: branch_addr
    };
To use it in the function being called, directly use them as:    app.sendTextMessage(<span class="hljs-string" style="color: rgb(42, 161, 152);">`Branch name is <span class="hljs-subst" style="color: rgb(203, 75, 22);">${args.branch}</span>`</span>);
**Note :**<span>&nbsp;</span>There is no need to use<span>&nbsp;</span>`.then`<span>&nbsp;</span>and<span>&nbsp;</span>`.catch`<span>&nbsp;</span>but it is good practice since this function will be executed asynchronously and you may resolve the function before even actually setting the value.**Note :**<span>&nbsp;</span>If a value has to be returned, then return it as<span>&nbsp;</span>`return value`.
                    </div>

                    
                                                      
                </div>             </div> 
            <div id="footer" role="contentinfo">
                <section class="footer-body">
                    Document generated by Confluence on Sep 22, 2020 13:50
                    <div id="footer-logo">[Atlassian](http://www.atlassian.com/)</div>
                </section>
            </div>
        </div>     
