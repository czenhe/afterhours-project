# 初期設置
```
$ npx create-next-app@latest --typescript
```
## localhostポート変更
他のプロジェクトと被らないように
- package.json でscript修正
```
"dev": "next dev",
　　↓
"dev": "next dev -p 3080",
```