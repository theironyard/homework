if [[ ! -o interactive ]]; then
    return
fi

compctl -K _homework homework

_homework() {
  local word words completions
  read -cA words
  word="${words[2]}"

  if [ "${#words}" -eq 2 ]; then
    completions="$(homework commands)"
  else
    completions="$(homework completions "${word}")"
  fi

  reply=("${(ps:\n:)completions}")
}
