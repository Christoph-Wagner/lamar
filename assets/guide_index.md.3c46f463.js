import{o as n,c as a,a as s,b as t}from"./app.21b67795.js";const e='{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"What is Lamar?","slug":"what-is-lamar"},{"level":2,"title":"History and Motivation","slug":"history-and-motivation"},{"level":2,"title":"Lamar as IoC Container","slug":"lamar-as-ioc-container"},{"level":2,"title":"Lamar within ASP.Net Core Applications","slug":"lamar-within-asp-net-core-applications"},{"level":2,"title":"Lamar for Runtime Code Generation & Compilation","slug":"lamar-for-runtime-code-generation-compilation"}],"relativePath":"guide/index.md","lastUpdated":1629820849195}',o={},p=t('<h1 id="getting-started"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1><p>This page does assume that you are already familiar with IoC containers. For more background on the concepts and usage of an IoC container within your application, see <a href="/guide/ioc/concepts.html">concepts</a></p><h2 id="what-is-lamar"><a class="header-anchor" href="#what-is-lamar" aria-hidden="true">#</a> What is Lamar?</h2><p>Lamar is a .NET library that provides two pieces of functionality:</p><ol><li>A fast <a href="https://www.martinfowler.com/articles/injection.html" target="_blank" rel="noopener noreferrer">Inversion of Control Container</a> that natively supports the <a href="https://code.msdn.microsoft.com/Dependency-injection-in-f789ceaa" target="_blank" rel="noopener noreferrer">ASP.Net Core DI abstractions</a> and a subset of the older <a href="https://structuremap.github.io" target="_blank" rel="noopener noreferrer">StructureMap library</a></li><li>The dynamic code generation and compilation features used underneath the IoC implementation</li></ol><h2 id="history-and-motivation"><a class="header-anchor" href="#history-and-motivation" aria-hidden="true">#</a> History and Motivation</h2><p><a href="https://structuremap.github.io" target="_blank" rel="noopener noreferrer">StructureMap</a> was the first production capable Inversion of Control container in the .Net ecosystem, with its first production usage in the summer of 2004. Despite its success, StructureMap&#39;s internals were not keeping up well with modern usage within <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core applications and lagged in performance. Lamar was conceived as a replacement for StructureMap that would hugely improve upon StructureMap&#39;s performance, be completely compliant with the new <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core DI behavior, and provide an easy off ramp for existing StructureMap users.</p><h2 id="lamar-as-ioc-container"><a class="header-anchor" href="#lamar-as-ioc-container" aria-hidden="true">#</a> Lamar as IoC Container</h2><p>To get started, just add <a href="https://www.nuget.org/packages/Lamar/" target="_blank" rel="noopener noreferrer">Lamar</a> to your project through Nuget.</p><p>Most of the time you use an IoC container these days, it&#39;s probably mostly hidden inside of some kind of application framework. However, if you wanted to use Lamar all by itself you would first <a href="/guide/ioc/bootstrapping.html">bootstrap a Lamar container</a> with all its service registrations something like this:</p>',10),c=t('<p><a id="snippet-sample_start-a-container"></a></p><div class="language-cs"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// Using StructureMap style registrations</span>\n    x<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IClock<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Clock<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">// Using ASP.Net Core DI style registrations</span>\n    x<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddTransient</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IClock<span class="token punctuation">,</span> Clock<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">// and lots more services in all likelihood</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/Samples/GettingStarted.cs#L11-L22" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_start-a-container" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Now, to resolve services from your container:</p>',4),r=t('<p><a id="snippet-sample_resolving-services-quickstart"></a></p><div class="language-cs"><pre><code><span class="token comment">// StructureMap style</span>\n\n<span class="token comment">// Get a required service</span>\n<span class="token class-name"><span class="token keyword">var</span></span> clock <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IClock<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Try to resolve a service if it&#39;s registered</span>\n<span class="token class-name"><span class="token keyword">var</span></span> service <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">TryGetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ASP.Net Core style</span>\n<span class="token class-name"><span class="token keyword">var</span></span> provider <span class="token operator">=</span> <span class="token punctuation">(</span>IServiceProvider<span class="token punctuation">)</span>container<span class="token punctuation">;</span>\n\n<span class="token comment">// Get a required service</span>\n<span class="token class-name"><span class="token keyword">var</span></span> clock2 <span class="token operator">=</span> provider<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRequiredService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IClock<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Try to resolve a service if it&#39;s registered</span>\n<span class="token class-name"><span class="token keyword">var</span></span> service2 <span class="token operator">=</span> provider<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/Samples/GettingStarted.cs#L24-L41" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_resolving-services-quickstart" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Definitely note that the old StructureMap style of service resolution is semantically different than <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core&#39;s DI resolution methods. That&#39;s been the cause of much user aggravation over the years.</p><h2 id="lamar-within-asp-net-core-applications"><a class="header-anchor" href="#lamar-within-asp-net-core-applications" aria-hidden="true">#</a> Lamar within <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core Applications</h2><p>To use Lamar within <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core applications, also install the <a href="https://www.nuget.org/packages/Lamar.Microsoft.DependencyInjection/" target="_blank" rel="noopener noreferrer">Lamar.Microsoft.DependencyInjection</a> library from Nuget to your <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core project (and you can thank Microsoft for the clumsy naming convention, thank you).</p><p>With that NuGet installed, your normal <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core bootstrapping changes just slightly. When you bootstrap your <code>IWebHostBuilder</code> object that configures <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core, you also need to call the <code>UseLamar()</code> method as shown below:</p>',7),i=t('<p><a id="snippet-sample_getting-started-main"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WebHostBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    builder\n        <span class="token comment">// Replaces the built in DI container</span>\n        <span class="token comment">// with Lamar</span>\n        <span class="token punctuation">.</span><span class="token function">UseLamar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        \n        <span class="token comment">// Normal ASP.Net Core bootstrapping</span>\n        <span class="token punctuation">.</span><span class="token function">UseUrls</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:5002&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">UseKestrel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">UseStartup</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Startup<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    builder<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.AspNetCoreTests/Samples/StartUp.cs#L14-L31" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_getting-started-main" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>If you use a <code>StartUp</code> class for extra configuration, your <code>ConfigureContainer()</code> method <em>can</em> take in a <code>ServiceRegistry</code> object from Lamar for service registrations in place of the <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core <code>IServiceCollection</code> interface as shown below:</p>',4),l=t('<p><a id="snippet-sample_getting-started-startup"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Startup</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// Take in Lamar&#39;s ServiceRegistry instead of IServiceCollection</span>\n    <span class="token comment">// as your argument, but fear not, it implements IServiceCollection</span>\n    <span class="token comment">// as well</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureContainer</span><span class="token punctuation">(</span><span class="token class-name">ServiceRegistry</span> services<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// Supports ASP.Net Core DI abstractions</span>\n        services<span class="token punctuation">.</span><span class="token function">AddMvc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        services<span class="token punctuation">.</span><span class="token function">AddLogging</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        \n        <span class="token comment">// Also exposes Lamar specific registrations</span>\n        <span class="token comment">// and functionality</span>\n        services<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span>s <span class="token operator">=&gt;</span>\n        <span class="token punctuation">{</span>\n            s<span class="token punctuation">.</span><span class="token function">TheCallingAssembly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            s<span class="token punctuation">.</span><span class="token function">WithDefaultConventions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">IApplicationBuilder</span> app<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        app<span class="token punctuation">.</span><span class="token function">UseMvc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.AspNetCoreTests/Samples/StartUp.cs#L35-L61" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_getting-started-startup" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>You can also still write <code>ConfigureServices(IServiceCollection)</code>, but you&#39;d miss out on most of Lamar&#39;s extra functionality beyond what that abstraction provides.</p><p>And that is that, you&#39;re ready to run your <a href="http://ASP.Net" target="_blank" rel="noopener noreferrer">ASP.Net</a> Core application with Lamar handling service resolution and object cleanup during your HTTP requests.</p><h2 id="lamar-for-runtime-code-generation-compilation"><a class="header-anchor" href="#lamar-for-runtime-code-generation-compilation" aria-hidden="true">#</a> Lamar for Runtime Code Generation &amp; Compilation</h2><p>Please see <a href="/guide/compilation/">compilation</a> for more information.</p>',7);o.render=function(t,e,o,u,k,m){return n(),a("div",null,[p,s(" snippet: sample_start-a-container "),c,s(" snippet: sample_resolving-services-quickstart "),r,s(" snippet: sample_getting-started-main "),i,s(" snippet: sample_getting-started-startup "),l])};export{e as __pageData,o as default};
