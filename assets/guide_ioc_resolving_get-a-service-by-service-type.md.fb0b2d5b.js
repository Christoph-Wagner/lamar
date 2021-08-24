import{o as n,c as s,a,d as t,e as p,b as e}from"./app.21b67795.js";const c='{"title":"Get a Service by ServiceType","description":"","frontmatter":{},"relativePath":"guide/ioc/resolving/get-a-service-by-service-type.md","lastUpdated":1629820849278}',o={},u=t("h1",{id:"get-a-service-by-servicetype"},[t("a",{class:"header-anchor",href:"#get-a-service-by-servicetype","aria-hidden":"true"},"#"),p(" Get a Service by ServiceType")],-1),l=t("p",null,[p("Requesting the default configured object of a service type is done through the "),t("code",null,"IContainer.GetInstance()"),p(" method shown below:")],-1),i=e('<p><a id="snippet-sample_getinstance"></a></p><div class="language-cs"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">get_the_default_instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        x<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// or</span>\n\n    container<span class="token punctuation">.</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IWidget</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/IoC/Acceptance/get_all_instances.cs#L43-L61" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_getinstance" title="Start of snippet">anchor</a></sup><a id="snippet-sample_getinstance-1"></a></p><div class="language-cs"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">get_the_default_instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> x<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// or</span>\n\n    container<span class="token punctuation">.</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IWidget</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/Resolving/SimpleScenarios.cs#L9-L24" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_getinstance-1" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p>',5);o.render=function(t,p,e,c,o,k){return n(),s("div",null,[u,l,a(" snippet: sample_GetInstance "),i])};export{c as __pageData,o as default};
