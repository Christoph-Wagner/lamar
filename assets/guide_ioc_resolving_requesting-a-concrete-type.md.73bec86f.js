import{o as n,c as s,a,b as e}from"./app.275c2f8a.js";const t='{"title":"Auto Resolving Concrete Types","description":"","frontmatter":{},"relativePath":"guide/ioc/resolving/requesting-a-concrete-type.md","lastUpdated":1638370315140}',o={},p=e('<h1 id="auto-resolving-concrete-types"><a class="header-anchor" href="#auto-resolving-concrete-types" aria-hidden="true">#</a> Auto Resolving Concrete Types</h1><p>Lamar allows you to resolve instances of concrete classes without configuring that concrete type with a few provisos:</p><ul><li>The concrete type must have at least one public constructor</li><li>Lamar can build all the arguments in the constructor, either because Lamar has explicit configuration for that dependency or can auto resolve the type</li><li>The constructor does not contain any <em>primitive</em> arguments like strings, numbers, or dates because Lamar assumes those elements are configuration items and not <em>auto resolvable</em>.</li></ul><p>Let&#39;s say we have the following object model, which represents the weather condition for a certain location.</p>',4),c=e('<p><a id="snippet-sample_concrete-weather-model"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Weather</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Location</span> Location <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Atmosphere</span> Atmosphere <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Wind</span> Wind <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Condition</span> Condition <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token function">Weather</span><span class="token punctuation">(</span><span class="token class-name">Location</span> location<span class="token punctuation">,</span> <span class="token class-name">Atmosphere</span> atmosphere<span class="token punctuation">,</span> <span class="token class-name">Wind</span> wind<span class="token punctuation">,</span> <span class="token class-name">Condition</span> condition<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Location <span class="token operator">=</span> location<span class="token punctuation">;</span>\n        Atmosphere <span class="token operator">=</span> atmosphere<span class="token punctuation">;</span>\n        Wind <span class="token operator">=</span> wind<span class="token punctuation">;</span>\n        Condition <span class="token operator">=</span> condition<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Location</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">//some properties</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Atmosphere</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">//some properties</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Wind</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">//some properties        </span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Condition</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">//some properties        </span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Samples/model.cs#L92-L129" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_concrete-weather-model" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Before we can resolve the concrete <code>Weather</code> type, we need an instance of an <code>Container</code> object. As mentioned earlier, these objects defines a generic <code>GetInstance</code> method which can build us an instance of the <code>Weather</code> type.</p><p>You can create a container yourself or use the statically accessed container.</p>',5),l=e('<p><a id="snippet-sample_quickstart-resolve-concrete-types"></a></p><div class="language-cs"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> weather1 <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Weather<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> weather2 <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Weather<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nweather2 <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Weather<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//short version for above.</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Samples/quickstart/resolving_instances.cs#L44-L50" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_quickstart-resolve-concrete-types" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>The reason why we don&#39;t need to supply any configuration is because Lamar supports a concept called <a href="/guide/ioc/auto-wiring.html">auto wiring</a>. It&#39;s basically a smart way of building instances of types by looking to the constructors of the requested and all the needed underlying types. During this inspection Lamar also uses any provided configuration to help building the requested service or dependency.</p><p>In our example, where there isn&#39;t any configuration available, Lamar looks at the constructor of the requested <code>Weather</code> type. It sees that it depends on four concrete types which all have a default constructor. Lamar is therefore able to create an instance for all of them and inject them into the <code>Weather</code> constructor. After that the <code>Weather</code> instance is returned to the caller.</p><p>Most of the time you will be mapping abstractions to concrete types, but as you have seen Lamar supports other use cases as well.</p>',6);o.render=function(e,t,o,r,i,u){return n(),s("div",null,[p,a(" snippet: sample_concrete-weather-model "),c,a(" snippet: sample_quickstart-resolve-concrete-types "),l])};export{t as __pageData,o as default};
