# Meaning is Resource-Sensitive

The notion that linguistic meaning is context-sensitive is common in Cognitive Science and related fields. 
Essentially, this is the idea that the meaning of an expression is determined by an Interpreter according to existing contextual information.
Most existing formal semantics models adhere to something along the lines of a “Context Principle”: something only has meaning in context.

If a system is context-sensitive, then it must rely on an intermediate interpretation step which determines the meaning of input-data relative to a context.
Interpretation is necessarily a computational process, which means that it has a number of required resources; namely Time and Space.
In other words, if linguistic meaning is dependent on contextual information, then it must also be dependent on the resources allocated towards its interpretation.

Even among basic sentences, resource-sensitivity has a clear effect on meaning.
A quick (low-resource) interpretation of the sentence, "Snow is white" may produce the proposition, $\text{White}(\text{snow})$.
However, further interpretation (using more resources) may reveal that frozen rain is white or that snow is the same color as the White House.
The meaning of a sentence is dramatically dependent on the resources devoted to interpreting it.

Because meaning and information are resource-sensitive, it doesn’t make sense to refer to the meaning of something without indicating the resources and context available for interpretation.
However, most models seem to ignore the resource-sensitivity of information and meaning!
They ask for an interpretation relative to a context, but never specify what resources are available for interpretation.

Surely there must be consequences for this… right?

$$
x_C = P(x, C, s, t)
$$
