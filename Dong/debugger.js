var lengthOfLongestSubstring = function(s) {
    const window = new Map();
    let left=0, right=0, len=0;
    while(right < s.length){
        const c = s[right];
        right++;
        if(window.get(c) > 0){
            window.set(c ,window.get(c)+1);
        }else{
            window.set(c ,1);
        }
        while(window[c] > 1){
            const d = s[left];
            left++;
            window.set(d, window.get(d)-1);
        }
        len = Math.max(len, right-left);
    }
    return len;
};

lengthOfLongestSubstring('pwwkew');