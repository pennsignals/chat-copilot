select
    m.dt,
    count(m.dt) as n,
    sum(m.audienceExtraction) as audienceExtraction,
    sum(m.userIntentExtraction) as userIntentExtraction,
    sum(m.metaPromptTemplate) as metaPromptTemplate,
    sum(m.responseCompletion) as responseCompletion,
    sum(m.workingMemoryExtraction) as workingMemoryExtraction,
    sum(m.longTermMemoryExtraction) as longTermMemoryExtraction
from (
    select
        substring(m.timestamp, 0, 10) as dt,
        m.tokenUsage.audienceExtraction as audienceExtraction,
        m.tokenUsage.userIntentExtraction as userIntentExtraction,
        m.tokenUsage.metaPromptTemplate as metaPromptTemplate,
        m.tokenUsage.responseCompletion as responseCompletion,
        m.tokenUsage.workingMemoryExtraction as workingMemoryExtraction,
        m.tokenUsage.longTermMemoryExtraction as longTermMemoryExtraction
    from
        chatmessages as m
    ) as m
group by
    m.dt
