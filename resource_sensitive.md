# Meaning is Resource-Sensitive

A basic goal of Linguistics and Cognitive Science is to determine a non-ambiguous method for representing the meaning of a linguistic expression.
Since Frege's notions of Sense and Reference in 1892, a common theme underlying formal models of semantics is the notion of Context-Sensitivitiy.
This is the idea that the meaning of an expression is determined by an Interpreter according to existing contextual information -- without a context to be interpreted within, information and meaning cannot exist.
For example, the word "Cat" has meaning by association with past memories of Cats and other occurences of the word in the language.
I believe that the Context-Sensitive nature of such models suggests that the models must also be sensitive to the availability of computational resources such as Time and Space.
 
The argument is fairly straight forward:
1. If a system is context-sensitive, then it must rely on an intermediate interpretation step which determines the meaning of input-data relative to a context.
2. Interpretation is a computational process.
3. Computational processes can be measured in terms of required resources; typically Time and Space.
4. By (2) and (3), the computational nature of Interpretation causes it to rely on Resources (ie: Time or Space).
5. By (1) and (4), any Context-Sensitive system requires Interpretation, which requires Resources. Therefore, any Context-Sensitive must also be Resource-Sensitive.

In other words, if linguistic meaning is dependent on contextual information, then it must also be dependent on the resources allocated towards its interpretation.

Even among basic sentences, resource-sensitivity has a clear effect on meaning.
A quick (low-resource) interpretation of the sentence, "Snow is white" may produce the proposition, $\text{White}(\text{snow})$.
However, further interpretation (using more resources) may reveal that frozen rain is white or that snow is the same color as the White House.
The meaning of a sentence is dramatically dependent on the resources devoted to interpreting it.

Because meaning and information are resource-sensitive, it doesn’t make sense to refer to the meaning of something without indicating the resources and context available for interpretation.
However, most models seem to ignore the resource-sensitivity of information and meaning!
They ask for an interpretation relative to a context, but never specify what resources are available for interpretation.

Surely there must be consequences for this… right?
