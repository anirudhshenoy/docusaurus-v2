
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
                    # &#10;                                                <span id="title-text">&#10;                            Documentation : app.profile&#10;                        </span>&#10;                    
                </div>

                <div id="content" class="view">
                    <div class="page-metadata">
                        
        
    
        
    
        
        
            Created by <span class="author"> Praneeth Kumar Reddy B</span>, last modified on Jan 29, 2020
                        </div>
                    <div id="main-content" class="wiki-content group">
                    This object contains all about the user data i.e. `userAgent`, `payload` (anything passed using ym.payload)The Update Profile functionality is used when we have to add some parameters to user profileMost of the information is stored in&nbsp;`app.profile` is- Ip- Timezone, country_code, latitude, longitude, region, country, city,- Device type, os, browser- UserId to uniquely identify the user- UTM parameters ([<u>https://en.wikipedia.org/wiki/UTM_parameters</u>](https://en.wikipedia.org/wiki/UTM_parameters))- Name: Anonymous unique name <div class="toc-macro rbtoc1600762812915">

- [Objects](#app.profile-Objects)
        
    - [userAgent](#app.profile-userAgent)
            
        - [example](#app.profile-example)
        
        
    

- [Properties](#app.profile-Properties)
        
    - [city | string](#app.profile-city|string)
            
        - [example](#app.profile-example.1)
        
        
    - [country| string](#app.profile-country|string)
            
        - [example](#app.profile-example.2)
        
        
    

- [More Properties](#app.profile-MoreProperties)
- [Store Values](#app.profile-StoreValues)

</div>- - -Typical `app.profile` object looks like this<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">{
    "userAgent": {
        "browser": "Chrome",
        "os": "OS X",
        "platform": "Apple Mac",
        "source": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
        "device": "Desktop"
    },
    "city": "Bangalore",
    "country": "India",
    "region": "Karnataka",
    "longitude": "77.603290",
    "latitude": "12.976230",
    "end_ip": 736141311,
    "value": "560018",
    "country_code": "IN",
    "start_ip": 736140288,
    "timezone": "+05:30",
    "ip": "43.224.157.81",
    "userId": null,
    "userToken": null,
    "name": "Nervous Destruction",
    "utm_source": null,
    "utm_campaign": null,
    "utm_medium": null,
    "utm_term": null,
    "utm_content": null,
}</pre>
</div></div>- - -## Objects### userAgentThis object contains about the user browser, device, platform, os, and source#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"userAgent": {
        "browser": "Chrome",
        "os": "OS X",
        "platform": "Apple Mac",
        "source": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
        "device": "Desktop"
},</pre>
</div></div>- - -## Properties### city | `string`Has the value user city name#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"city": "Bangalore"</pre>
</div></div>- - -### country| `string`Has the value of user country name#### example<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence" data-theme="Confluence">"country": "India"</pre>
</div></div>- - -## More PropertiesIt has the following properties along with the above- `region`- `longitude`- `latitude`- `end_ip`- `value`- `country_code`- `start_ip`- `timezone`- `ip`- `userId`- `userToken`- `name` (Anonymous unique name )- `utm_source`- `utm_campaign`- `utm_medium`- `utm_content`- `utm_term`## Store ValuesWe can also store values in `app.profile` object as follows:<div class="code panel pdl" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="codeContent panelContent pdl">
<pre class="syntaxhighlighter-pre" data-syntaxhighlighter-params="brush: js; gutter: false; theme: Confluence" data-theme="Confluence">app.profile.variable_name = varible_value;
//example app.profile.mobileNum = '9876543210';
app.updateProfile(); //call this method to update profile object</pre>
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

