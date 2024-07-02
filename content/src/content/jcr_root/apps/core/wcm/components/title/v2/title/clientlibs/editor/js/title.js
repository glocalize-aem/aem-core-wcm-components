<!doctype html>
<html lang=en>
  <head>
    <title>NameError: name &#39;path&#39; is not defined
 // Werkzeug Debugger</title>
    <link rel="stylesheet" href="?__debugger__=yes&amp;cmd=resource&amp;f=style.css">
    <link rel="shortcut icon"
        href="?__debugger__=yes&amp;cmd=resource&amp;f=console.png">
    <script src="?__debugger__=yes&amp;cmd=resource&amp;f=debugger.js"></script>
    <script>
      var CONSOLE_MODE = false,
          EVALEX = true,
          EVALEX_TRUSTED = false,
          SECRET = "1il1neLWNTgiE0uvweP1";
    </script>
  </head>
  <body style="background-color: #fff">
    <div class="debugger">
<h1>NameError</h1>
<div class="detail">
  <p class="errormsg">NameError: name &#39;path&#39; is not defined
</p>
</div>
<h2 class="traceback">Traceback <em>(most recent call last)</em></h2>
<div class="traceback">
  <h3></h3>
  <ul><li><div class="frame" id="frame-4630209248">
  <h4>File <cite class="filename">"/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py"</cite>,
      line <em class="line">1498</em>,
      in <code class="function">__call__</code></h4>
  <div class="source library"><pre class="line before"><span class="ws">    </span>) -&gt; cabc.Iterable[bytes]:</pre>
<pre class="line before"><span class="ws">        </span>&#34;&#34;&#34;The WSGI server calls the Flask application object as the</pre>
<pre class="line before"><span class="ws">        </span>WSGI application. This calls :meth:`wsgi_app`, which can be</pre>
<pre class="line before"><span class="ws">        </span>wrapped to apply middleware.</pre>
<pre class="line before"><span class="ws">        </span>&#34;&#34;&#34;</pre>
<pre class="line current"><span class="ws">        </span>return self.wsgi_app(environ, start_response)</pre></div>
</div>

<li><div class="frame" id="frame-4641281968">
  <h4>File <cite class="filename">"/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py"</cite>,
      line <em class="line">1476</em>,
      in <code class="function">wsgi_app</code></h4>
  <div class="source library"><pre class="line before"><span class="ws">            </span>try:</pre>
<pre class="line before"><span class="ws">                </span>ctx.push()</pre>
<pre class="line before"><span class="ws">                </span>response = self.full_dispatch_request()</pre>
<pre class="line before"><span class="ws">            </span>except Exception as e:</pre>
<pre class="line before"><span class="ws">                </span>error = e</pre>
<pre class="line current"><span class="ws">                </span>response = self.handle_exception(e)</pre>
<pre class="line after"><span class="ws">            </span>except:  # noqa: B001</pre>
<pre class="line after"><span class="ws">                </span>error = sys.exc_info()[1]</pre>
<pre class="line after"><span class="ws">                </span>raise</pre>
<pre class="line after"><span class="ws">            </span>return response(environ, start_response)</pre>
<pre class="line after"><span class="ws">        </span>finally:</pre></div>
</div>

<li><div class="frame" id="frame-4641282080">
  <h4>File <cite class="filename">"/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py"</cite>,
      line <em class="line">1473</em>,
      in <code class="function">wsgi_app</code></h4>
  <div class="source library"><pre class="line before"><span class="ws">        </span>ctx = self.request_context(environ)</pre>
<pre class="line before"><span class="ws">        </span>error: BaseException | None = None</pre>
<pre class="line before"><span class="ws">        </span>try:</pre>
<pre class="line before"><span class="ws">            </span>try:</pre>
<pre class="line before"><span class="ws">                </span>ctx.push()</pre>
<pre class="line current"><span class="ws">                </span>response = self.full_dispatch_request()</pre>
<pre class="line after"><span class="ws">            </span>except Exception as e:</pre>
<pre class="line after"><span class="ws">                </span>error = e</pre>
<pre class="line after"><span class="ws">                </span>response = self.handle_exception(e)</pre>
<pre class="line after"><span class="ws">            </span>except:  # noqa: B001</pre>
<pre class="line after"><span class="ws">                </span>error = sys.exc_info()[1]</pre></div>
</div>

<li><div class="frame" id="frame-4641282192">
  <h4>File <cite class="filename">"/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py"</cite>,
      line <em class="line">882</em>,
      in <code class="function">full_dispatch_request</code></h4>
  <div class="source library"><pre class="line before"><span class="ws">            </span>request_started.send(self, _async_wrapper=self.ensure_sync)</pre>
<pre class="line before"><span class="ws">            </span>rv = self.preprocess_request()</pre>
<pre class="line before"><span class="ws">            </span>if rv is None:</pre>
<pre class="line before"><span class="ws">                </span>rv = self.dispatch_request()</pre>
<pre class="line before"><span class="ws">        </span>except Exception as e:</pre>
<pre class="line current"><span class="ws">            </span>rv = self.handle_user_exception(e)</pre>
<pre class="line after"><span class="ws">        </span>return self.finalize_request(rv)</pre>
<pre class="line after"><span class="ws"></span> </pre>
<pre class="line after"><span class="ws">    </span>def finalize_request(</pre>
<pre class="line after"><span class="ws">        </span>self,</pre>
<pre class="line after"><span class="ws">        </span>rv: ft.ResponseReturnValue | HTTPException,</pre></div>
</div>

<li><div class="frame" id="frame-4641282304">
  <h4>File <cite class="filename">"/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py"</cite>,
      line <em class="line">880</em>,
      in <code class="function">full_dispatch_request</code></h4>
  <div class="source library"><pre class="line before"><span class="ws"></span> </pre>
<pre class="line before"><span class="ws">        </span>try:</pre>
<pre class="line before"><span class="ws">            </span>request_started.send(self, _async_wrapper=self.ensure_sync)</pre>
<pre class="line before"><span class="ws">            </span>rv = self.preprocess_request()</pre>
<pre class="line before"><span class="ws">            </span>if rv is None:</pre>
<pre class="line current"><span class="ws">                </span>rv = self.dispatch_request()</pre>
<pre class="line after"><span class="ws">        </span>except Exception as e:</pre>
<pre class="line after"><span class="ws">            </span>rv = self.handle_user_exception(e)</pre>
<pre class="line after"><span class="ws">        </span>return self.finalize_request(rv)</pre>
<pre class="line after"><span class="ws"></span> </pre>
<pre class="line after"><span class="ws">    </span>def finalize_request(</pre></div>
</div>

<li><div class="frame" id="frame-4641282416">
  <h4>File <cite class="filename">"/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py"</cite>,
      line <em class="line">865</em>,
      in <code class="function">dispatch_request</code></h4>
  <div class="source library"><pre class="line before"><span class="ws">            </span>and req.method == &#34;OPTIONS&#34;</pre>
<pre class="line before"><span class="ws">        </span>):</pre>
<pre class="line before"><span class="ws">            </span>return self.make_default_options_response()</pre>
<pre class="line before"><span class="ws">        </span># otherwise dispatch to the handler for that endpoint</pre>
<pre class="line before"><span class="ws">        </span>view_args: dict[str, t.Any] = req.view_args  # type: ignore[assignment]</pre>
<pre class="line current"><span class="ws">        </span>return self.ensure_sync(self.view_functions[rule.endpoint])(**view_args)  # type: ignore[no-any-return]</pre>
<pre class="line after"><span class="ws"></span> </pre>
<pre class="line after"><span class="ws">    </span>def full_dispatch_request(self) -&gt; Response:</pre>
<pre class="line after"><span class="ws">        </span>&#34;&#34;&#34;Dispatches the request and on top of that performs request</pre>
<pre class="line after"><span class="ws">        </span>pre and postprocessing as well as HTTP exception catching and</pre>
<pre class="line after"><span class="ws">        </span>error handling.</pre></div>
</div>

<li><div class="frame" id="frame-4641282528">
  <h4>File <cite class="filename">"/Users/akasjain/project/Glocalize/gen_ai/model_server.py"</cite>,
      line <em class="line">25</em>,
      in <code class="function">predict</code></h4>
  <div class="source "><pre class="line before"><span class="ws">    </span>data = request.get_data()</pre>
<pre class="line before"><span class="ws">    </span>print(&#39;data&#39;, data)</pre>
<pre class="line before"><span class="ws">    </span>#path = data[&#39;path&#39;]</pre>
<pre class="line before"><span class="ws">    </span>#prompt = data[&#39;prompt&#39;]</pre>
<pre class="line before"><span class="ws">    </span># Log the received data</pre>
<pre class="line current"><span class="ws">    </span># logger.info(f&#34;Received file: {path}&#34;)</pre>
<pre class="line after"><span class="ws">    </span># logger.info(f&#34;Received data: {prompt}&#34;)</pre>
<pre class="line after"><span class="ws"></span> </pre>
<pre class="line after"><span class="ws">    </span># Make prediction using the model</pre>
<pre class="line after"><span class="ws">    </span>output = model.localize_code_completion(tokenizer, peft_model, data)</pre>
<pre class="line after"><span class="ws"></span> </pre></div>
</div>
</ul>
  <blockquote>NameError: name &#39;path&#39; is not defined
</blockquote>
</div>

<div class="plain">
    <p>
      This is the Copy/Paste friendly version of the traceback.
    </p>
    <textarea cols="50" rows="10" name="code" readonly>Traceback (most recent call last):
  File &#34;/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py&#34;, line 1498, in __call__
    return self.wsgi_app(environ, start_response)
  File &#34;/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py&#34;, line 1476, in wsgi_app
    response = self.handle_exception(e)
  File &#34;/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py&#34;, line 1473, in wsgi_app
    response = self.full_dispatch_request()
  File &#34;/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py&#34;, line 882, in full_dispatch_request
    rv = self.handle_user_exception(e)
  File &#34;/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py&#34;, line 880, in full_dispatch_request
    rv = self.dispatch_request()
  File &#34;/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py&#34;, line 865, in dispatch_request
    return self.ensure_sync(self.view_functions[rule.endpoint])(**view_args)  # type: ignore[no-any-return]
  File &#34;/Users/akasjain/project/Glocalize/gen_ai/model_server.py&#34;, line 25, in predict
    # logger.info(f&#34;Received file: {path}&#34;)
NameError: name &#39;path&#39; is not defined
</textarea>
</div>
<div class="explanation">
  The debugger caught an exception in your WSGI application.  You can now
  look at the traceback which led to the error.  <span class="nojavascript">
  If you enable JavaScript you can also use additional features such as code
  execution (if the evalex feature is enabled), automatic pasting of the
  exceptions and much more.</span>
</div>
      <div class="footer">
        Brought to you by <strong class="arthur">DON'T PANIC</strong>, your
        friendly Werkzeug powered traceback interpreter.
      </div>
    </div>

    <div class="pin-prompt">
      <div class="inner">
        <h3>Console Locked</h3>
        <p>
          The console is locked and needs to be unlocked by entering the PIN.
          You can find the PIN printed out on the standard output of your
          shell that runs the server.
        <form>
          <p>PIN:
            <input type=text name=pin size=14>
            <input type=submit name=btn value="Confirm Pin">
        </form>
      </div>
    </div>
  </body>
</html>

<!--

Traceback (most recent call last):
  File "/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py", line 1498, in __call__
    return self.wsgi_app(environ, start_response)
  File "/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py", line 1476, in wsgi_app
    response = self.handle_exception(e)
  File "/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py", line 1473, in wsgi_app
    response = self.full_dispatch_request()
  File "/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py", line 882, in full_dispatch_request
    rv = self.handle_user_exception(e)
  File "/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py", line 880, in full_dispatch_request
    rv = self.dispatch_request()
  File "/Users/akasjain/project/genai-llm/venv/lib/python3.9/site-packages/flask/app.py", line 865, in dispatch_request
    return self.ensure_sync(self.view_functions[rule.endpoint])(**view_args)  # type: ignore[no-any-return]
  File "/Users/akasjain/project/Glocalize/gen_ai/model_server.py", line 25, in predict
    # logger.info(f"Received file: {path}")
NameError: name 'path' is not defined


-->
