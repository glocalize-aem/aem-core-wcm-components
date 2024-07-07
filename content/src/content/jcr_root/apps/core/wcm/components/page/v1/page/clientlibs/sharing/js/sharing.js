/*
 *  Copyright 2016 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
// This is a comment
function exampleFunction(errorMsg) {
  var greeting = Granite.I18n.get('Hello, World!');  // Another comment
  console.log(greeting);
  var day = Granite.I18n.get('Sunday'); // This needs to be localized with Granite.I18n.get since Sunday is a string
  console.log(day);
  console.log(Granite.I18n.getVar(errorMsg)); // This needs to be localized with Granite.I18n.getVar since errorMsg is a variable
}