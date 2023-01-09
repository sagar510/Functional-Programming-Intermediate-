-- Date :27 Dec 2022 Sir explained remove duplicate in single line with high orderfunction

ft.n.xs=n::xs

--rd.xs=foldr.F.xs.[]



ff.x.m= if (x==m) then False else True
f.x.xs=x::filter.(ff.x).xs
rd.xs=foldr.f.[].xs


eof.xs=filter.ceo.xs
ceo.m=if (rem.m.2 == 0) then True else False



--remo.[].n=[]
--remo.(x::xs).n=if (x==n) then remo.xs.n else remo.(x::xs).n

remdupsir.xs=foldr.(\x->((filter.((/=).x));((::).x))).[].xs



-- HOMEWORK

mt.xs=lets.(mt1.xs.1)
mt1.[].n=[]
mt1.(x::xs).n=(x,n)::mt1.xs.(n+1)

--myft.n.ls=n::ls

--mtl.xs=foldl.myft.[].xs

remt.[].a=[]
remt.((m,n)::xs).a=if (m==a) then remt.xs.a else (m,n)::remt.xs.a

lets1.[].ks.m=(m,ks)
lets1.((a,b)::xs).ks.m=if (a==m) then lets1.xs.(ks++[b]).m else lets1.xs.ks.m

lets.[]=[]
lets.((a,b)::xs)=(lets1.((a,b)::xs).[].a)::lets.(remt.xs.a)


--ALITER

counteach.[].y.ks.n=(y,ks)
counteach.(x::xs).y.ks.n=if (x==y) then counteach.xs.y.(ks++[n]).(n+1) else counteach.xs.y.ks.(n+1)

countdup1.xs.[]=[]
countdup1.xs.(y::ys)=counteach.xs.y.[].1::countdup1.xs.ys
countdup.xs=countdup1.xs.(myremdup.xs)

remove.[].y=[]
remove.(x::xs).y=if (x==y) then remove.xs.y else x::remove.xs.y

myremdup.[]=[]
myremdup.(x::xs)=x::myremdup.(remove.(xs).x)