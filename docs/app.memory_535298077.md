
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
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : app.memory&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Praneeth Kumar Reddy B</span>, last modified on Jan 30, 2020
                        </div>
                    <div id="main-content" class="wiki-content group">
                    This object contains methods for storing, accessing, deleting data in Redis In memory<div class="toc-macro rbtoc1600762813297">

- [Methods](#app.memory-Methods)
- [set](#app.memory-set)
        
    - [Syntax](#app.memory-Syntax)
    - [Parameters](#app.memory-Parameters)
            
        - [key | string](#app.memory-key|string)
        - [data | string or object](#app.memory-data|stringorobject)
        - [expiry | int | optional](#app.memory-expiry|int|optional)
        
        
    - [Return Value](#app.memory-ReturnValue)
    - [Example](#app.memory-Example)
    

- [get](#app.memory-get)
        
    - [Syntax](#app.memory-Syntax.1)
    - [Parameters](#app.memory-Parameters.1)
            
        - [key | string](#app.memory-key|string.1)
        
        
    - [Return Value](#app.memory-ReturnValue.1)
    - [Example](#app.memory-Example.1)
    

- [delete | del](#app.memory-delete|del)
        
    - [Syntax](#app.memory-Syntax.2)
    - [Parameters](#app.memory-Parameters.2)
            
        - [key | string](#app.memory-key|string.2)
        
        
    - [Example](#app.memory-Example.2)
    

- [getMultiple](#app.memory-getMultiple)
        
    - [Syntax](#app.memory-Syntax.3)
    - [Parameters](#app.memory-Parameters.3)
            
        - [keys | array](#app.memory-keys|array)
        
        
    - [Return Value](#app.memory-ReturnValue.2)
    - [Example](#app.memory-Example.3)
    


</div>- - -## Methods## setThis method sets a value using the key in memory### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.memory.set(key, data, expiry)
.then(()=&gt;{
})
.catch(()=&gt;{
});</pre>
</div></div>### Parameters#### key | `string`A key to store the data#### data | `string or object`The data to be stored in the memory#### expiry | `int` | `optional`The expiry time in seconds. It is optional, the default value is `172800` seconds ( 2 days ).### Return ValueIt returns a promise### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.memory.set('mobile', '9876543210', 3600)
.then(()=&gt;{
  //your code
})
.catch(()=&gt;{
  //memory set failed, deal with error
})</pre>
</div></div>- - -## getThis method is used to access the stored data using the key.### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.memory.get(key)
.then((value)=&gt;{
})
.catch(()=&gt;{
});</pre>
</div></div>### Parameters#### key | `string`A key for getting the stored data### Return ValueIt returns a promise along with the data### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.memory.get('mobile')
.then((value)=&gt;{
  app.log(value);
})
.catch((error)=&gt;{
  //memory get failed deal with error
  //may be key not found in the memory
  app.log(error);
});
//if memory get success, the log will be
"9876543210"
//if memory get fails, the log will be
key mobile not found in memory</pre>
</div></div>- - -## delete | delThis method deletes a value using the key in memory### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.memory.delete(key) or app.memory.del(key)</pre>
</div></div>### Parameters#### key | `string`A key to delete the data from the memory### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.memory.delete('mobile') (or) app.memory.del('mobile')</pre>
</div></div>- - -## getMultipleThis method is used to get multiple values stored in memory### Syntax<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.memory.getMultiple(keys)
.then((results)=&gt;{
})
.catch(()=&gt;{
});</pre>
</div></div>### Parameters#### keys | `array`An array of keys to get values from memory### Return ValueIt returns the results object containing key-value pairs### Example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.memory.getMultiple(['mobile', 'name'])
.then((results)=&gt;{
  app.log(results);
})
.catch(()=&gt;{
  //deal with error
});

//the log will be
{
    "mobile": "9876543210",
    "name": "Yellow Messenger"
}</pre>
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

