#include <stdio.h>
#include <stdlib.h>
#include <string.h>

size_t ft_strlen(const char *s)
{
    size_t i = 0;
    while (s[i])
        i++;
    return i;
}

char *ft_strdup(const char *s)
{
    size_t len = ft_strlen(s);
    char *dup = malloc(len + 1);
    if (!dup)
        return NULL;
    for (size_t i = 0; i <= len; i++)
        dup[i] = s[i];
    return dup;
}

char *ft_substr(char const *s, unsigned int start, size_t len)
{
    size_t i;
    size_t s_len;
    char *substr;

    if (!s)
        return NULL;
    s_len = ft_strlen(s);
    if (start >= s_len)
        return ft_strdup("");
    if (len > s_len - start)
        len = s_len - start;
    substr = malloc(sizeof(char) * (len + 1));
    if (!substr)
        return NULL;
    i = 0;
    while (i < len && s[start + i])
    {
        substr[i] = s[start + i];
        i++;
    }
    substr[i] = '\0';
    return substr;
}

static int is_set(char c, char const *set)
{
    int i;

    i = 0;
    while (set[i])
    {
        if (set[i] == c)
            return (1);
        i++;
    }
    return (0);
}

char *ft_strtrim(char const *s1, char const *set)
{
    unsigned int start;
    size_t end;
    size_t len;

    if (!s1 || !set)
        return (NULL);
    if (!*s1)
        return (ft_strdup(""));

    len = 0;
    start = 0;
    end = ft_strlen(s1);

    while (s1[start] && is_set(s1[start], set) == 1)
        start++;

    if (start == end)
        return (ft_strdup(""));

    while (end > start && is_set(s1[end - 1], set) == 1)
        end--;

    len = end - start;
    return (ft_substr(s1, start, len));
}

void test_ft_strtrim(const char *s1, const char *set, const char *expected)
{
    char *result = ft_strtrim(s1, set);
    printf("Input: \"%s\", Set: \"%s\"\n", s1, set);
    printf("Expected: \"%s\"\n", expected);
    printf("Result:   \"%s\"\n", result ? result : "NULL");
    if ((result && strcmp(result, expected) == 0) || (!result && strcmp("NULL", expected) == 0))
        printf("Test PASSED\n\n");
    else
        printf("Test FAILED\n\n");
    free(result);
}

int main(void)
{
    // Test case 1: Basic trimming
    test_ft_strtrim("  Hello, World!  ", " ", "Hello, World!");

    // Test case 2: Trimming multiple characters
    test_ft_strtrim("...Hello, World!...", ".", "Hello, World!");

    // Test case 3: No trimming needed
    test_ft_strtrim("Hello, World!", " ", "Hello, World!");

    // Test case 4: Empty string input
    test_ft_strtrim("", " ", "");

    // Test case 5: Empty set
    test_ft_strtrim("  Hello, World!  ", "", "  Hello, World!  ");

    // Test case 6: All characters to be trimmed
    test_ft_strtrim("   ", " ", "");

    // Test case 7: Trimming from start only
    test_ft_strtrim("  Hello, World!", " ", "Hello, World!");

    // Test case 8: Trimming from end only
    test_ft_strtrim("Hello, World!  ", " ", "Hello, World!");

    // Test case 9: Complex set
    test_ft_strtrim("abcHello, World!cba", "abc", "Hello, World!");

    // Test case 10: NULL input string
    test_ft_strtrim(NULL, " ", "NULL");

    // Test case 11: NULL set
    test_ft_strtrim("Hello, World!", NULL, "NULL");

    return 0;
}