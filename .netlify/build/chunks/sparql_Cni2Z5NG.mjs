import turtle from "./turtle_Dvq5oTrR.mjs";
const lang = Object.freeze(JSON.parse('{"displayName":"SPARQL","fileTypes":["rq","sparql","sq"],"name":"sparql","patterns":[{"include":"source.turtle"},{"include":"#query-keyword-operators"},{"include":"#functions"},{"include":"#variables"},{"include":"#expression-operators"}],"repository":{"expression-operators":{"match":"(?:\\\\|\\\\||&&|=|!=|<|>|<=|>=|\\\\*|/|\\\\+|-|\\\\||\\\\^|\\\\?|\\\\!)","name":"support.class.sparql"},"functions":{"match":"\\\\b(?i:concat|regex|asc|desc|bound|isiri|isuri|isblank|isliteral|isnumeric|str|lang|datatype|sameterm|langmatches|avg|count|group_concat|separator|max|min|sample|sum|iri|uri|bnode|strdt|uuid|struuid|strlang|strlen|substr|ucase|lcase|strstarts|strends|contains|strbefore|strafter|encode_for_uri|replace|abs|round|ceil|floor|rand|now|year|month|day|hours|minutes|seconds|timezone|tz|md5|sha1|sha256|sha384|sha512|coalesce|if)\\\\b","name":"support.function.sparql"},"query-keyword-operators":{"match":"\\\\b(?i:define|select|distinct|reduced|from|named|construct|ask|describe|where|graph|having|bind|as|filter|optional|union|order|by|group|limit|offset|values|insert data|delete data|with|delete|insert|clear|silent|default|all|create|drop|copy|move|add|to|using|service|not exists|exists|not in|in|minus|load)\\\\b","name":"keyword.control.sparql"},"variables":{"match":"(?<!\\\\w)[?$]\\\\w+","name":"constant.variable.sparql.turtle"}},"scopeName":"source.sparql","embeddedLangs":["turtle"]}'));
const sparql = [
  ...turtle,
  lang
];
export {
  sparql as default
};
