import{o as n,c as a,a as s,b as e}from"./app.21b67795.js";const t='{"title":"Using the Container Model","description":"","frontmatter":{},"headers":[{"level":2,"title":"Querying for Service Types","slug":"querying-for-service-types"},{"level":2,"title":"Working with a Service Type","slug":"working-with-a-service-type"},{"level":2,"title":"Finding the Default for a Service Type","slug":"finding-the-default-for-a-service-type"},{"level":2,"title":"Finding an Instance by Type and Name","slug":"finding-an-instance-by-type-and-name"},{"level":2,"title":"All Instances for a Service Type","slug":"all-instances-for-a-service-type"},{"level":2,"title":"Testing for Registrations","slug":"testing-for-registrations"},{"level":2,"title":"Finding all Possible Implementors of an Interface","slug":"finding-all-possible-implementors-of-an-interface"}],"relativePath":"guide/ioc/diagnostics/using-the-container-model.md","lastUpdated":1629820849248}',p={},o=e('<h1 id="using-the-container-model"><a class="header-anchor" href="#using-the-container-model" aria-hidden="true">#</a> Using the Container Model</h1><p>The queryable <code>Container.Model</code> is a power facility to look into your Lamar <code>Container</code> and even to eject previously built services from the Container. The <code>Container.Model</code> represents a <strong>static view of what a <code>Container</code> already has</strong>, and does not account for policies that may allow Lamar to validly discover types that it may encounter later at runtime.</p><h2 id="querying-for-service-types"><a class="header-anchor" href="#querying-for-service-types" aria-hidden="true">#</a> Querying for Service Types</h2><p>The <a href="/guide/ioc/diagnostics/what-do-i-have.html">WhatDoIHave()</a> mechanism works by just iterating over the <code>Container.Model.ServiceTypes</code> collection as shown below:</p>',4),c=e('<p><a id="snippet-sample_find-all-plugin-types-from-the-current-assembly"></a></p><div class="language-cs"><pre><code>container<span class="token punctuation">.</span>Model<span class="token punctuation">.</span>PluginTypes<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>PluginType<span class="token punctuation">.</span>Assembly <span class="token operator">==</span> Assembly<span class="token punctuation">.</span><span class="token function">GetExecutingAssembly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Each</span><span class="token punctuation">(</span>pluginType <span class="token operator">=&gt;</span> Debug<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>pluginType<span class="token punctuation">.</span>PluginType<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/UsingContainerModel.cs#L19-L22" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_find-all-plugin-types-from-the-current-assembly" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><h2 id="working-with-a-service-type"><a class="header-anchor" href="#working-with-a-service-type" aria-hidden="true">#</a> Working with a Service Type</h2><p>The <code>IServiceFamilyConfiguration</code> interface allows you to query and manipulate all the configured Instance&#39;s for a given service type.</p><p>See the entire <a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar/IServiceFamilyConfiguration.cs" target="_blank" rel="noopener noreferrer">IServiceFamilyConfiguration interface here</a>.</p><h2 id="finding-the-default-for-a-service-type"><a class="header-anchor" href="#finding-the-default-for-a-service-type" aria-hidden="true">#</a> Finding the Default for a Service Type</h2><p>To simply find out what the default concrete type would be for a requested service type, use one of these two methods:</p>',8),i=e('<p><a id="snippet-sample_find-default-of-plugintype"></a></p><div class="language-cs"><pre><code><span class="token comment">// Finding the concrete type of the default</span>\n<span class="token comment">// IDevice service</span>\ncontainer<span class="token punctuation">.</span>Model<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">DefaultTypeFor</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDevice<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ShouldBe</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">DefaultDevice</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Find the configuration model for the default</span>\n<span class="token comment">// IDevice service</span>\ncontainer<span class="token punctuation">.</span>Model<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDevice<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Default\n    <span class="token punctuation">.</span>ReturnedType<span class="token punctuation">.</span><span class="token function">ShouldBe</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">DefaultDevice</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/UsingContainerModel.cs#L24-L34" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_find-default-of-plugintype" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><h2 id="finding-an-instance-by-type-and-name"><a class="header-anchor" href="#finding-an-instance-by-type-and-name" aria-hidden="true">#</a> Finding an Instance by Type and Name</h2><p>Use this syntax to find information about an Instance in a given service type and name:</p>',5),l=e('<p><a id="snippet-sample_find-named-instance-by-type-and-name"></a></p><div class="language-cs"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> redRule <span class="token operator">=</span> container<span class="token punctuation">.</span>Model<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Find</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Rule<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;Red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/UsingContainerModel.cs#L36-L38" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_find-named-instance-by-type-and-name" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><h2 id="all-instances-for-a-service-type"><a class="header-anchor" href="#all-instances-for-a-service-type" aria-hidden="true">#</a> All Instances for a Service Type</h2><p>This sample shows how you could iterate or query over all the registered instances for a single service type:</p>',5),r=e('<p><a id="snippet-sample_query-instances-of-plugintype"></a></p><div class="language-cs"><pre><code>container<span class="token punctuation">.</span>Model<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Rule<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Instances<span class="token punctuation">.</span><span class="token function">Each</span><span class="token punctuation">(</span>i <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n    Debug<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>Instance<span class="token punctuation">.</span>Description<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/UsingContainerModel.cs#L40-L45" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_query-instances-of-plugintype" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><h2 id="testing-for-registrations"><a class="header-anchor" href="#testing-for-registrations" aria-hidden="true">#</a> Testing for Registrations</h2><p>To troubleshoot or automate testing of Container configuration, you can use code like the sample below to test for the presence of expected configurations:</p>',5),u=e('<p><a id="snippet-sample_testing-for-registrations"></a></p><div class="language-cs"><pre><code><span class="token comment">// Is there a default instance for IDevice?</span>\ncontainer<span class="token punctuation">.</span>Model<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">HasDefaultImplementationFor</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDevice<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ShouldBeTrue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Are there any configured instances for IDevice?</span>\ncontainer<span class="token punctuation">.</span>Model<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">HasImplementationsFor</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDevice<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ShouldBeTrue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/UsingContainerModel.cs#L67-L73" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_testing-for-registrations" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><h2 id="finding-all-possible-implementors-of-an-interface"><a class="header-anchor" href="#finding-all-possible-implementors-of-an-interface" aria-hidden="true">#</a> Finding all Possible Implementors of an Interface</h2><p>Forget about what types are registered for whatever service types and consider this, what if you have an interface called <code>IStartable</code> that just denotes objects that will need to be activated after the container is bootstrapped?</p><p>If our interface is this below:</p>',6),d=e('<p><a id="snippet-sample_istartable"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IStartable</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IDisposable</span></span>\n<span class="token punctuation">{</span>\n    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/IoC/Acceptance/activation_and_interception.cs#L305-L312" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_istartable" title="Start of snippet">anchor</a></sup><a id="snippet-sample_istartable-1"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IStartable</span>\n<span class="token punctuation">{</span>\n    <span class="token return-type class-name"><span class="token keyword">bool</span></span> WasStarted <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/IoC/Acceptance/container_model_usage.cs#L267-L275" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_istartable-1" title="Start of snippet">anchor</a></sup><a id="snippet-sample_istartable-2"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IStartable</span>\n<span class="token punctuation">{</span>\n    <span class="token return-type class-name"><span class="token keyword">bool</span></span> WasStarted <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Query/ModelIntegrationTester.cs#L188-L196" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_istartable-2" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>We could walk through the entire Lamar model and find every registered instance that implements this interface, create each, and call the <code>Start()</code> method like in this code below:</p>',8),k=e('<p><a id="snippet-sample_calling-startable-start"></a></p><div class="language-cs"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> allStartables <span class="token operator">=</span> container<span class="token punctuation">.</span>Model<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetAllPossible</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IStartable<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nallStartables<span class="token punctuation">.</span><span class="token function">ToArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Each</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/IoC/Acceptance/container_model_usage.cs#L219-L223" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_calling-startable-start" title="Start of snippet">anchor</a></sup><a id="snippet-sample_calling-startable-start-1"></a></p><div class="language-cs"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> allStartables <span class="token operator">=</span> container<span class="token punctuation">.</span>Model<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetAllPossible</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IStartable<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nallStartables<span class="token punctuation">.</span><span class="token function">ToArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Each</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Query/ModelIntegrationTester.cs#L102-L106" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_calling-startable-start-1" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>I&#39;ve also used this mechanism in automated testing to reach out to all singleton services that may have state to clear out their data between tests.</p>',6);p.render=function(e,t,p,f,h,g){return n(),a("div",null,[o,s(" snippet: sample_find-all-plugin-types-from-the-current-assembly "),c,s(" snippet: sample_find-default-of-plugintype "),i,s(" snippet: sample_find-named-instance-by-type-and-name "),l,s(" snippet: sample_query-instances-of-plugintype "),r,s(" snippet: sample_testing-for-registrations "),u,s(" snippet: sample_istartable "),d,s(" snippet: sample_calling-startable-start "),k])};export{t as __pageData,p as default};
