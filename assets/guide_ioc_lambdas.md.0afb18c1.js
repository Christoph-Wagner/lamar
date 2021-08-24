import{o as n,c as s,a,b as e}from"./app.21b67795.js";const t='{"title":"Building Objects with Lambdas","description":"","frontmatter":{},"relativePath":"guide/ioc/lambdas.md","lastUpdated":1629820849231}',o={},p=e('<h1 id="building-objects-with-lambdas"><a class="header-anchor" href="#building-objects-with-lambdas" aria-hidden="true">#</a> Building Objects with Lambdas</h1><p>Instead of allowing Lamar to build objects directly, you can give a Lamar <code>Container</code> a <a href="https://msdn.microsoft.com/en-us/library/bb397687.aspx" target="_blank" rel="noopener noreferrer">Lambda function</a> that can be called to create an object at resolution time.</p><p>Using NHibernate&#39;s <a href="https://github.com/nhibernate/nhibernate-core/blob/master/src/NHibernate/ISession.cs" target="_blank" rel="noopener noreferrer"><code>ISession</code></a> as an example of an object that typically has to be built by using an <a href="https://github.com/nhibernate/nhibernate-core/blob/master/src/NHibernate/ISessionFactory.cs" target="_blank" rel="noopener noreferrer"><code>ISessionFactory</code></a> object:</p>',3),c=e('<p><a id="snippet-sample_nhibernate-isession-factory"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ISession</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ISessionFactory</span>\n<span class="token punctuation">{</span>\n    <span class="token return-type class-name">ISession</span> <span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Samples/TalkSamples.cs#L52-L59" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_nhibernate-isession-factory" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>If we want to allow Lamar to control the <code>ISession</code> lifecycle and creation, we have to register a Lambda function as the means of creating <code>ISession</code> as shown in this example below:</p>',4),i=e('<p><a id="snippet-sample_sessionfactoryregistry"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SessionFactoryRegistry</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Registry</span></span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// Let&#39;s not worry about how ISessionFactory is built</span>\n    <span class="token comment">// in this example</span>\n    <span class="token keyword">public</span> <span class="token function">SessionFactoryRegistry</span><span class="token punctuation">(</span><span class="token class-name">ISessionFactory</span> factory<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ISessionFactory<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// Build ISession with a lambda:</span>\n        <span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ISession<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token string">&quot;Build ISession from ISessionFactory&quot;</span><span class="token punctuation">,</span> c <span class="token operator">=&gt;</span>\n        <span class="token punctuation">{</span>\n            <span class="token comment">// To resolve ISession, I first pull out</span>\n            <span class="token comment">// ISessionFactory from the IContext and use that</span>\n            <span class="token comment">// to build a new ISession. </span>\n            <span class="token keyword">return</span> c<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ISessionFactory<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Samples/TalkSamples.cs#L61-L80" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_sessionfactoryregistry" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Lambda registrations can be done with any of the following four signatures:</p><ol><li><code>(Expression&lt;Func&lt;IContext, T&gt;&gt; builder)</code> -- a simple, one line Lambda to build <code>T</code> using <code>IContext</code></li><li><code>(Expression&lt;Func&lt;T&gt;&gt; func)</code> -- a simple, one line Lambda to build <code>T</code></li><li><code>(string description, Func&lt;IContext, T&gt; builder)</code> -- use <code>IContext</code> in your builder Lambda with a user-supplied description for diagnostics</li><li><code>(string description, Func&lt;T&gt; builder)</code> -- Supply a complex <code>Func&lt;T&gt;</code> with a user-supplied description for diagnostics</li></ol><p><strong>Be very wary of the difference between legal <code>Expression&#39;s</code> and more complicated Lambda&#39;s that will need to be <code>Func&#39;s</code>.</strong> It likely doesn&#39;t matter to you the user, but it unfortunately does to Lamar and .NET itself. If you need to use a more complex <code>Func</code>, you will have to supply a diagnostic description.</p>',6);o.render=function(e,t,o,l,r,u){return n(),s("div",null,[p,a(" snippet: sample_nhibernate-isession-factory "),c,a(" snippet: sample_SessionFactoryRegistry "),i])};export{t as __pageData,o as default};
