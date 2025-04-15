const lang = Object.freeze(JSON.parse(`{"displayName":"RISC-V","fileTypes":["S","s","riscv","asm"],"name":"riscv","patterns":[{"comment":"ok actually this are instructions, but one also could call them funtions…","match":"\\\\b(la|lb|lh|lw|ld|nop|li|mv|not|neg|negw|sext\\\\.w|seqz|snez|sltz|sgtz|beqz|bnez|blez|bgez|bltz|bgtz|bgt|ble|bgtu|bleu|j|jal|jr|ret|call|tail|fence|csr[r|w|s|c]|csr[w|s|c]i)\\\\b","name":"support.function.pseudo.riscv"},{"match":"\\\\b(add|addw|auipc|lui|jalr|beq|bne|blt|bge|bltu|bgeu|lb|lh|lw|ld|lbu|lhu|sb|sh|sw|sd|addi|addiw|slti|sltiu|xori|ori|andi|slli|slliw|srli|srliw|srai|sraiw|sub|subw|sll|sllw|slt|sltu|xor|srl|srlw|sra|sraw|or|and|fence|fence\\\\.i|csrrw|csrrs|csrrc|csrrwi|csrrsi|csrrci)\\\\b","name":"support.function.riscv"},{"comment":"priviledged instructions","match":"\\\\b(ecall|ebreak|sfence\\\\.vma|mret|sret|uret|wfi)\\\\b","name":"support.function.riscv.privileged"},{"comment":"M extension (multiplication and division)","match":"\\\\b(mul|mulh|mulhsu|mulhu|div|divu|rem|remu|mulw|divw|divuw|remw|remuw)\\\\b","name":"support.function.riscv.m"},{"comment":"C extension (compressed instructions)","match":"\\\\b(c\\\\.addi4spn|c\\\\.fld|c\\\\.lq|c\\\\.lw|c\\\\.flw|c\\\\.ld|c\\\\.fsd|c\\\\.sq|c\\\\.sw|c\\\\.fsw|c\\\\.sd|c\\\\.nop|c\\\\.addi|c\\\\.jal|c\\\\.addiw|c\\\\.li|c\\\\.addi16sp|c\\\\.lui|c\\\\.srli|c\\\\.srli64|c\\\\.srai|c\\\\.srai64|c\\\\.andi|c\\\\.sub|c\\\\.xor|c\\\\.or|c\\\\.and|c\\\\.subw|c\\\\.addw|c\\\\.j|c\\\\.beqz|c\\\\.bnez)\\\\b","name":"support.function.riscv.c"},{"comment":"A extension (atomic instructions)","match":"\\\\b(lr\\\\.[w|d]|sc\\\\.[w|d]|amoswap\\\\.[w|d]|amoadd\\\\.[w|d]|amoxor\\\\.[w|d]|amoand\\\\.[w|d]|amoor\\\\.[w|d]|amomin\\\\.[w|d]|amomax\\\\.[w|d]|amominu\\\\.[w|d]|amomaxu\\\\.[w|d])\\\\b","name":"support.function.riscv.a"},{"comment":"F extension (single precision floating point)","match":"\\\\b(flw|fsw|fmadd\\\\.s|fmsub\\\\.s|fnmsub\\\\.s|fnmadd\\\\.s|fadd\\\\.s|fsub\\\\.s|fmul\\\\.s|fdiv\\\\.s|fsqrt\\\\.s|fsgnj\\\\.s|fsgnjn\\\\.s|fsgnjx\\\\.s|fmin\\\\.s|fmax\\\\.s|fcvt\\\\.w\\\\.s|fcvt\\\\.wu\\\\.s|fmv\\\\.x\\\\.w|feq\\\\.s|flt\\\\.s|fle\\\\.s|fclass\\\\.s|fcvt\\\\.s\\\\.w|fcvt\\\\.s\\\\.wu|fmv\\\\.w\\\\.x|fcvt\\\\.l\\\\.s|fcvt\\\\.lu\\\\.s|fcvt\\\\.s\\\\.l|fcvt\\\\.s\\\\.lu)\\\\b","name":"support.function.riscv.f"},{"comment":"D extension (double precision floating point)","match":"\\\\b(fld|fsd|fmadd\\\\.d|fmsub\\\\.d|fnmsub\\\\.d|fnmadd\\\\.d|fadd\\\\.d|fsub\\\\.d|fmul\\\\.d|fdiv\\\\.d|fsqrt\\\\.d|fsgnj\\\\.d|fsgnjn\\\\.d|fsgnjx\\\\.d|fmin\\\\.d|fmax\\\\.d|fcvt\\\\.s\\\\.d|fcvt\\\\.d\\\\.s|feq\\\\.d|flt\\\\.d|fle\\\\.d|fclass\\\\.d|fcvt\\\\.w\\\\.d|fcvt\\\\.wu\\\\.d|fcvt\\\\.d\\\\.w|fcvt\\\\.d\\\\.wu|fcvt\\\\.l\\\\.d|fcvt\\\\.lu\\\\.d|fmv\\\\.x\\\\.d|fcvt\\\\.d\\\\.l|fcvt\\\\.d\\\\.lu|fmv\\\\.d\\\\.x)\\\\b","name":"support.function.riscv.d"},{"match":"\\\\.(skip|ascii|asciiz|byte|[2|4|8]byte|data|double|float|half|kdata|ktext|space|text|word|dword|dtprelword|dtpreldword|set\\\\s*(noat|at)|[s|u]leb128|string|incbin|zero|rodata|comm|common)\\\\b","name":"storage.type.riscv"},{"match":"\\\\.(balign|align|p2align|extern|globl|global|local|pushsection|section|bss|insn|option|type|equ|macro|endm|file|ident)\\\\b","name":"storage.modifier.riscv"},{"captures":{"1":{"name":"entity.name.function.label.riscv"}},"match":"\\\\b([A-Za-z0-9_]+):","name":"meta.function.label.riscv"},{"captures":{"1":{"name":"punctuation.definition.variable.riscv"}},"match":"\\\\b(x([0-9]|1[0-9]|2[0-9]|3[0-1]))\\\\b","name":"variable.other.register.usable.by-number.riscv"},{"captures":{"1":{"name":"punctuation.definition.variable.riscv"}},"match":"\\\\b(zero|ra|sp|gp|tp|t[0-6]|a[0-7]|s[0-9]|fp|s1[0-1])\\\\b","name":"variable.other.register.usable.by-name.riscv"},{"captures":{"1":{"name":"punctuation.definition.variable.riscv"}},"match":"\\\\b(([umsh]|vs)status|([umsh]|vs)ie|([ums]|vs)tvec|([ums]|vs)scratch|([ums]|vs)epc|([ums]|vs)cause|([umsh]|vs)tval|([umsh]|vs)ip|fflags|frm|fcsr|m?cycleh?|timeh?|m?instreth?|m?hpmcounter([3-9]|[12][0-9]|3[01])h?|[msh][ei]deleg|[msh]counteren|v?satp|hgeie|hgeip|[hm]tinst|hvip|hgatp|htimedeltah?|mvendorid|marchid|mimpid|mhartid|misa|mstatush|mtval2|pmpcfg[0-3]|pmpaddr([0-9]|1[0-5])|mcountinhibit|mhpmevent([3-9]|[12][0-9]|3[01])|tselect|tdata[1-3]|dcsr|dpc|dscratch[0-1])\\\\b","name":"variable.other.csr.names.riscv"},{"captures":{"1":{"name":"punctuation.definition.variable.riscv"}},"match":"\\\\bf([0-9]|1[0-9]|2[0-9]|3[0-1])\\\\b","name":"variable.other.register.usable.floating-point.riscv"},{"match":"\\\\b\\\\d+\\\\.\\\\d+\\\\b","name":"constant.numeric.float.riscv"},{"match":"\\\\b(\\\\d+|0(x|X)[a-fA-F0-9]+)\\\\b","name":"constant.numeric.integer.riscv"},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.riscv"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.riscv"}},"name":"string.quoted.double.riscv","patterns":[{"match":"\\\\\\\\[rnt\\\\\\\\\\"]","name":"constant.character.escape.riscv"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.riscv"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.riscv"}},"name":"string.quoted.single.riscv","patterns":[{"match":"\\\\\\\\[rnt\\\\\\\\\\"]","name":"constant.character.escape.riscv"}]},{"begin":"\\\\/\\\\*","end":"\\\\*\\\\/","name":"comment.block"},{"begin":"\\\\/\\\\/","end":"\\\\n","name":"comment.line.double-slash"},{"begin":"^\\\\s*\\\\#\\\\s*(define)\\\\s+((?<id>[a-zA-Z_][a-zA-Z0-9_]*))(?:(\\\\()(\\\\s*\\\\g<id>\\\\s*((,)\\\\s*\\\\g<id>\\\\s*)*(?:\\\\.\\\\.\\\\.)?)(\\\\)))?","beginCaptures":{"1":{"name":"keyword.control.import.define.c"},"2":{"name":"entity.name.function.preprocessor.c"},"4":{"name":"punctuation.definition.parameters.c"},"5":{"name":"variable.parameter.preprocessor.c"},"7":{"name":"punctuation.separator.parameters.c"},"8":{"name":"punctuation.definition.parameters.c"}},"end":"(?=(?://|/\\\\*))|$","name":"meta.preprocessor.macro.c","patterns":[{"match":"(?>\\\\\\\\\\\\s*\\\\n)","name":"punctuation.separator.continuation.c"},{"include":"$base"}]},{"begin":"^\\\\s*#\\\\s*(error|warning)\\\\b","captures":{"1":{"name":"keyword.control.import.error.c"}},"end":"$","name":"meta.preprocessor.diagnostic.c","patterns":[{"match":"(?>\\\\\\\\\\\\s*\\\\n)","name":"punctuation.separator.continuation.c"}]},{"begin":"^\\\\s*#\\\\s*(include|import)\\\\b\\\\s+","captures":{"1":{"name":"keyword.control.import.include.c"}},"end":"(?=(?://|/\\\\*))|$","name":"meta.preprocessor.c.include","patterns":[{"match":"(?>\\\\\\\\\\\\s*\\\\n)","name":"punctuation.separator.continuation.c"},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.c"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.c"}},"name":"string.quoted.double.include.c"},{"begin":"<","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.c"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.string.end.c"}},"name":"string.quoted.other.lt-gt.include.c"}]},{"begin":"^\\\\s*#\\\\s*(define|defined|elif|else|if|ifdef|ifndef|line|pragma|undef|endif)\\\\b","captures":{"1":{"name":"keyword.control.import.c"}},"end":"(?=(?://|/\\\\*))|$","name":"meta.preprocessor.c","patterns":[{"match":"(?>\\\\\\\\\\\\s*\\\\n)","name":"punctuation.separator.continuation.c"}]},{"begin":"(^[ \\\\t]+)?(?=#)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.riscv"}},"end":"(?!\\\\G)","patterns":[{"begin":"#|(\\\\/\\\\/)","beginCaptures":{"0":{"name":"punctuation.definition.comment.riscv"}},"end":"\\\\n","name":"comment.line.number-sign.riscv"}]}],"scopeName":"source.riscv"}`));
const riscv = [
  lang
];
export {
  riscv as default
};
