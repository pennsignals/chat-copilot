select
    m.chatId,
    count(m.chatId) as messages,
    sum(m.tokenUsage.audienceExtraction) as audienceExtraction,
    sum(m.tokenUsage.userIntentExtraction) as userIntentExtraction,
    sum(m.tokenUsage.metaPromptTemplate) as metaPromptUsage,
    sum(m.tokenUsage.responseCompletion) as responseCompletion,
    sum(m.tokenUsage.workingMemoryExtraction) as workingMemoryExtraction,
    sum(m.tokenUsage.longTermMemoryExtraction) as longTermMemoryExtraction
from
    chatmessages as m
group by
    m.chatId
